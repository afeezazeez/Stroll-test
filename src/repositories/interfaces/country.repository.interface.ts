import {IBaseRepository} from "./base.repository.interface";
import {Country} from "../../database/models/Country";


export interface ICountryRepositoryInterface extends IBaseRepository<Country>{
    getAllCountries(): Promise<Country[]>;
}
