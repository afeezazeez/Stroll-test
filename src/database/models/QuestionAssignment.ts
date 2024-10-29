import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'question_assignments',
    paranoid: true,
    timestamps: true,
    underscored: true
})
export class QuestionAssignment extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id!: number;


    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        references: { model: 'cycles', key: 'id' },
    })
    cycle_id!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        references: { model: 'questions', key: 'id' },
    })
    question_id!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        references: { model: 'countries', key: 'id' },
    })
    country_id!: number;


}

export default QuestionAssignment;