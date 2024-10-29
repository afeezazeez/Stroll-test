import {BaseRepository} from "./base.repository";
import {IQuestionAssignmentRepositoryInterface} from "./interfaces/question-assignment.repository.interface";
import {QuestionAssignment} from "../database/models/QuestionAssignment";


export class QuestionAssignmentRepository extends BaseRepository<QuestionAssignment> implements IQuestionAssignmentRepositoryInterface{

    constructor() {
        super(QuestionAssignment);
    }

    async getLastAssignmentForCountry(countryId: number, cycleId: number): Promise<QuestionAssignment | null> {
        return QuestionAssignment.findOne({
            where: { country_id: countryId, cycle_id: cycleId },
            order: [['created_at', 'DESC']],
        });
    }

}
