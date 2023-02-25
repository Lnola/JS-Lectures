import { DataTypes, Model, ModelStatic, Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.POSTGRES_DB || '',
  process.env.POSTGRES_USER || '',
  process.env.POSTGRES_PASSWORD || '',
  {
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
  }
);

import CommentModel from 'model';

const fields = CommentModel.fields(DataTypes) as any;
const dbOptions = CommentModel.dbOptions() as any;
Object.assign(dbOptions, { sequelize });
const Comment = CommentModel.init(fields, dbOptions) as ModelStatic<Model>;

export { Comment };
export default sequelize;
