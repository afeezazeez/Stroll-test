import { Model, Table, Column, DataType } from 'sequelize-typescript';
import exp from "node:constants";

@Table({
    tableName: 'users',
    paranoid: true,
    timestamps: true,
    underscored: true
})
export class User extends Model {
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

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    email!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        references: { model: 'countries', key: 'id' },
    })
    country_id!: number;

}

export default User;