import {Country} from "../database/models/Country";
import {BaseRepository} from "./base.repository";
import {ICountryRepositoryInterface} from "./interfaces/country.repository.interface";

export class CountryRepository extends BaseRepository<Country> implements ICountryRepositoryInterface{

    constructor() {
        super(Country);
    }

    async getAllCountries(): Promise<Country[]> {
        return Country.findAll();
    }

}
