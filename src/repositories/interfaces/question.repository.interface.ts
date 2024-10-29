import {IBaseRepository} from "./base.repository.interface";
import {Question} from "../../database/models/Question";


export interface IQuestionRepositoryInterface extends IBaseRepository<Question>{
     getFirstQuestionByCountryId(countryId: number): Promise<Question | null>;
     getQuestionsByCountryId(countryId: number): Promise<Question[]>;
}
