import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'cycles',
    paranoid: true,
    timestamps: true,
    underscored: true
})
export class Cycle extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id!: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    start_date!: Date;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    duration!: number;
}

export default Cycle;
