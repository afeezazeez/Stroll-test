import {Model, CreationAttributes,FindOptions, CreateOptions} from 'sequelize';

export interface IBaseRepository<T extends Model<T>> {
    create(data: CreationAttributes<T>, options?: CreateOptions): Promise<T>;
    findById(id:number, options?: FindOptions): Promise<T | null>;
}
