import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'questions',
    paranoid: true,
    timestamps: true,
    underscored: true
})
export class Question extends Model {
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
    content!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        references: { model: 'countries', key: 'id' },
    })
    country_id!: number;



}

export default Question;