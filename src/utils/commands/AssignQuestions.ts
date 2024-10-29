import {CycleRepository} from "../../repositories/cycle.repository";
import {CountryRepository} from "../../repositories/country.repository";
import {QuestionRepository} from "../../repositories/question.repository";
import {QuestionAssignmentRepository} from "../../repositories/question-assignment.repository";
import {Cycle} from "../../database/models/Cycle";
import {QuestionAssignment} from "../../database/models/QuestionAssignment";

import dayjs from 'dayjs';

class AssignQuestions  {

    private cycleRepository: CycleRepository;
    private countryRepository: CountryRepository;
    private questionRepository: QuestionRepository;
    private questionAssignmentRepository: QuestionAssignmentRepository;

    constructor(
        cycleRepo: CycleRepository,
        countryRepo: CountryRepository,
        questionRepo: QuestionRepository,
        questionAssignmentRepo: QuestionAssignmentRepository
    ) {
        this.cycleRepository = cycleRepo;
        this.countryRepository = countryRepo;
        this.questionRepository = questionRepo;
        this.questionAssignmentRepository = questionAssignmentRepo;
    }

    async run() {
        // Check if a cycle record exists

        const currentCycle = await this.cycleRepository.getLatestCycle();

        if (!currentCycle) {
            // Case 1: No cycle exists, create a new cycle
            await this.createCycle();
        } else {
            // Case 2: Last cycle exists, check if it has expired
            const hasExpired = this.checkCycleExpiry(currentCycle);

            if (hasExpired) {
                // Create assignments for all regions based on the next questions
                await this.createAssignmentsForNextCycle(currentCycle);
            }
        }
    }

    private async createCycle() {

        const cycle = await this.cycleRepository.create({
            start_date: new Date(),
            duration: 7, // duration in days
        });

        // Create question assignments for all regions
        const countries = await this.countryRepository.getAllCountries();

        for (const country of countries) {
            const firstQuestion = await this.questionRepository.getFirstQuestionByCountryId(country.id);

            if (firstQuestion) {
                await this.questionAssignmentRepository.create({
                    cycle_id: cycle.id,
                    country_id: country.id,
                    question_id: firstQuestion.id,
                });
            }
        }
    }

    private checkCycleExpiry(currentCycle: Cycle): boolean {
        const expiryDate = dayjs(currentCycle.start_date).add(currentCycle.duration, 'day');
        return dayjs().isAfter(expiryDate);
    }

    private async createAssignmentsForNextCycle(currentCycle: Cycle) {
        const newCycle = await this.cycleRepository.create({
            start_date: new Date(),
            duration: currentCycle.duration,
        });

        const countries = await this.countryRepository.getAllCountries();

        for (const country of countries) {
            const lastAssignment = await this.questionAssignmentRepository.getLastAssignmentForCountry(country.id, currentCycle.id);

            const nextQuestionId = await this.getNextQuestionId(country, lastAssignment);

            if (nextQuestionId) {
                await this.questionAssignmentRepository.create({
                    cycle_id: newCycle.id,
                    country_id: country.id,
                    question_id: nextQuestionId,
                });
            }
        }
    }

    private async getNextQuestionId(country: any, lastAssignment: QuestionAssignment | null): Promise<number | null> {
        const questions = await this.questionRepository.getQuestionsByCountryId(country.id);

        if (questions.length === 0) {
            return null; // No questions available
        }

        const lastQuestionId = lastAssignment ? lastAssignment.question_id : null;
        const lastIndex = lastQuestionId ? questions.findIndex(q => q.id === lastQuestionId) : -1;
        const nextIndex = (lastIndex + 1) % questions.length; // Wrap around

        return questions[nextIndex].id;
    }
}

export default AssignQuestions;
