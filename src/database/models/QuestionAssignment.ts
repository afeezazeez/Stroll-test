import { Model, Table, Column, DataType,BelongsTo,ForeignKey } from 'sequelize-typescript';
import Question from "./Question";
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

    @ForeignKey(() => Question)
    @Column
    question_id!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        references: { model: 'countries', key: 'id' },
    })
    country_id!: number;

    @BelongsTo(() => Question, { as: 'question' })
    question!: Question;  // Define the relationship with Question


}

export default QuestionAssignment;