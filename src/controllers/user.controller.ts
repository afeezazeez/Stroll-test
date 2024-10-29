import { Request, Response,NextFunction } from 'express';
import { UserService } from '../services/user.service';
import {sendSuccessResponse} from "../utils/http/response-handlers";
import QuestionAssignedDto from "../dtos/assigned-question.dto";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    getQuestionsForCurrentCycle = async (req: Request, res: Response, next: NextFunction) => {
        const userEmail = req.query.email as string;
        try {
            const assignedQuestion = await this.userService.getQuestionsForCurrentCycle(userEmail);
            return sendSuccessResponse(res, QuestionAssignedDto.make(assignedQuestion));
        } catch (e) {
            next(e);
        }
    };

}
