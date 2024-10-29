import {CreateOptions, FindOptions, Model, ModelStatic} from 'sequelize';
import {IBaseRepository} from "./interfaces/base.repository.interface";

export class BaseRepository<T extends Model<T>> implements IBaseRepository<T> {
    protected model: ModelStatic<T>;

    constructor(model: ModelStatic<T>) {
        this.model = model;
    }

    async create(data: any, options?: CreateOptions): Promise<T> {
        try {
            return await this.model.create(data, options);
        } catch (error) {
            throw error;
        }
    }
    async findById(id:number, options?: FindOptions): Promise<T | null> {
        try {
            return await this.model.findByPk(id, options);
        } catch (error) {
            throw error;
        }
    }
}
