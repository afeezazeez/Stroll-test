import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'Settings',
    timestamps: true,
})
export class Setting extends Model {
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    key!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    value!: string;
}
