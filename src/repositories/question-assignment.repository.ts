import {BaseRepository} from "./base.repository";
import {IQuestionAssignmentRepositoryInterface} from "./interfaces/question-assignment.repository.interface";
import {QuestionAssignment} from "../database/models/QuestionAssignment";
import Question from "../database/models/Question";

export class QuestionAssignmentRepository extends BaseRepository<QuestionAssignment> implements IQuestionAssignmentRepositoryInterface{

    constructor() {
        super(QuestionAssignment);
    }

    async getLastAssignmentForCountry(countryId: number, cycleId: number, includeQuestion: boolean = false): Promise<QuestionAssignment | null> {
        const include = includeQuestion ? [{ model: Question }] : [];
        return QuestionAssignment.findOne({
            where: { country_id: countryId, cycle_id: cycleId },
            include,
            order: [['created_at', 'DESC']],
        });
    }

}
