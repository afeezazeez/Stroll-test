import {IBaseRepository} from "./base.repository.interface";
import {Cycle} from "../../database/models/Cycle";


export interface ICycleRepositoryInterface extends IBaseRepository<Cycle>{
    getLatestCycle(): Promise<Cycle | null> ;
}
