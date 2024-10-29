import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'countries',
    paranoid: true,
    timestamps: true,
    underscored: true
})
export class Country extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;
}

export default Country;