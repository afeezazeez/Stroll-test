import {QuestionAssignment} from "../../database/models/QuestionAssignment";
import {IBaseRepository} from "./base.repository.interface";

export interface IQuestionAssignmentRepositoryInterface extends IBaseRepository<QuestionAssignment>{
    getLastAssignmentForCountry(country_id: number, cycle_id: number): Promise<QuestionAssignment | null>;
}
