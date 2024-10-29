import {Question} from "../database/models/Question";
import {BaseRepository} from "./base.repository";
import {IQuestionRepositoryInterface} from "./interfaces/question.repository.interface";

export class QuestionRepository extends BaseRepository<Question> implements IQuestionRepositoryInterface{

    constructor() {
        super(Question);
    }

    async getFirstQuestionByCountryId(countryId: number): Promise<Question | null> {
        return Question.findOne({
            where: { country_id: countryId },
            order: [['id', 'ASC']],
        });
    }

    async getQuestionsByCountryId(countryId: number): Promise<Question[]> {
        return Question.findAll({ where: { country_id: countryId } });
    }


}
