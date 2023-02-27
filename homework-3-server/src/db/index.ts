import { DataTypes, Model, ModelStatic, Sequelize } from 'sequelize';
import { forEach, invoke } from 'lodash';

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

const scopes = invoke(Comment, 'scopes');
forEach(scopes, (scope, name) =>
  Comment.addScope(name, scope, { override: true })
);

export { Comment };
export default sequelize;
