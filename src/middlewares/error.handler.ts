import { Request, Response, NextFunction } from 'express';
import { sendErrorResponse } from '../utils/http/response-handlers';
import {ClientErrorException} from '../exceptions/client.error.exception';
import Logger from '../utils/logger/wintson.logger';
import {ResponseStatus} from "../enums/http-status-codes";

function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    if (err instanceof ClientErrorException) {
        return sendErrorResponse(res, null, err.message, err.statusCode);
    }

    Logger.error(err);

    return sendErrorResponse(res, null, 'Internal Server Error', ResponseStatus.INTERNAL_SERVER);
}

export default errorHandler;
