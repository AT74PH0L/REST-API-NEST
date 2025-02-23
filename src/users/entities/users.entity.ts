import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Users extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fname: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lname: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  age: number;
}
