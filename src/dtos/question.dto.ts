import {IQuestion} from "../interfaces/question.interface";

class QuestionDto implements IQuestion {
    id: number;
    content: string;

    constructor(QuestionModel: any) {
        this.id = QuestionModel.id;
        this.content = QuestionModel.content
    }

    static make(QuestionModel: any): IQuestion {
        const questionDto = new QuestionDto(QuestionModel);
        return {
            id: questionDto.id,
            content: questionDto.content,
        };
    }

    static collection(questionModels: any[]): IQuestion[] {
        if (!questionModels || !Array.isArray(questionModels)) {
            return [];
        }

        return questionModels.map(questionModel => QuestionDto.make(questionModel));
    }
}

export default QuestionDto;
