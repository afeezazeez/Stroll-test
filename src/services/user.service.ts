import { UserRepository } from '../repositories/user.repository';
import { CycleRepository } from '../repositories/cycle.repository';
import {QuestionAssignmentRepository} from "../repositories/question-assignment.repository";
import { User } from '../database/models/User';
import {ClientErrorException} from "../exceptions/client.error.exception";
import QuestionAssignment from "../database/models/QuestionAssignment";

export class UserService {
    private userRepo: UserRepository;
    private cycleRepo: CycleRepository;
    private questionAssignmentRepo: QuestionAssignmentRepository;

    constructor() {
        this.userRepo = new UserRepository();
        this.cycleRepo = new CycleRepository();
        this.questionAssignmentRepo = new QuestionAssignmentRepository();
    }

    async getQuestionsForCurrentCycle(email: string): Promise<QuestionAssignment | null> {

        if (!email){
            throw new ClientErrorException('Email required to access your questions');
        }

        const user = await this.userRepo.getByEmail(email);

        if (!user) {
            throw new ClientErrorException('Account not found');
        }

        const latestCycle = await this.cycleRepo.getLatestCycle();

        if (!latestCycle) {
            throw new ClientErrorException('No cycle is available at this moment');
        }

        const questionAssignment = await this.questionAssignmentRepo.getLastAssignmentForCountry( user.country_id,latestCycle.id,true);

        if (!questionAssignment) {
            throw new ClientErrorException('No question assignment found for this user in the current cycle');
        }

        return questionAssignment;
    }
}
