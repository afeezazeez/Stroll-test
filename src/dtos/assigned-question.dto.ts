import {IQuestionAssigned} from "../interfaces/question-assigned.interface";
import QuestionDto from "./question.dto";
import {IQuestion} from "../interfaces/question.interface";


class QuestionAssignedDto implements IQuestionAssigned {
    id: number;
    question: IQuestion;

    constructor(QuestionAssignedModel: any) {
        this.id = QuestionAssignedModel.id;
        this.question = QuestionDto.make(QuestionAssignedModel.question);
    }

    static make(questionAssignedModel: any): IQuestionAssigned {
        const questionAssignedDto = new QuestionAssignedDto(questionAssignedModel);
        return {
            id: questionAssignedDto.id,
            question: questionAssignedDto.question,
        };
    }

    static collection(questionAssignedModels: any[]): IQuestionAssigned[] {
        if (!questionAssignedModels || !Array.isArray(questionAssignedModels)) {
            return [];
        }

        return questionAssignedModels.map(questionAssignedModel => QuestionAssignedDto.make(questionAssignedModel));
    }
}

export default QuestionAssignedDto;
