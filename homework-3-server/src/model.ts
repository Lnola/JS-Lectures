import { DataType, Model, NUMBER } from 'sequelize';

interface IFields {
  INTEGER?: DataType;
  TEXT?: DataType;
  BOOLEAN?: DataType;
  DATE?: DataType;
}

interface IComment {
  id: number;
  line: number;
  text: string;
  isLiked: boolean;
  createdAt: Date;
}

class CommentModel extends Model implements IComment {
  id!: number;
  line!: number;
  text!: string;
  isLiked!: boolean;
  createdAt!: Date;

  static fields({ INTEGER, TEXT, BOOLEAN, DATE }: IFields) {
    return {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      line: {
        type: INTEGER,
        allowNull: false,
      },
      text: {
        type: TEXT,
        allowNull: false,
      },
      isLiked: {
        type: BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        type: DATE,
        allowNull: false,
      },
    };
  }

  static dbOptions() {
    return {
      modelName: 'comment',
      tableName: 'comments',
      timestamps: false,
    };
  }
}

export default CommentModel;
