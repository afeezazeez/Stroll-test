import express, {Application,Request,Response,NextFunction} from 'express';
import ErrorHandler from "./middlewares/error.handler";
import {ClientErrorException} from "./exceptions/client.error.exception";
import {ResponseStatus} from "./enums/http-status-codes";




const app:Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use((req: Request, res: Response, next: NextFunction) => {
    next(new ClientErrorException("Route not found", ResponseStatus.NOT_FOUND));
});


app.use(ErrorHandler)

export default app;
