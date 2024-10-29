import {Cycle} from "../database/models/Cycle";
import {BaseRepository} from "./base.repository";
import {ICycleRepositoryInterface} from "./interfaces/cycle.repository.interface";

export class CycleRepository extends BaseRepository<Cycle> implements ICycleRepositoryInterface{

    constructor() {
        super(Cycle);
    }

    async getLatestCycle(): Promise<Cycle | null> {
        return Cycle.findOne({ order: [['start_date', 'DESC']] });
    }

}
