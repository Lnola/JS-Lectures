import { DataType, Model } from 'sequelize';

interface IFields {
  INTEGER?: DataType;
  TEXT?: DataType;
  BOOLEAN?: DataType;
  DATE?: DataType;
  STRING?: DataType;
}

interface IComment {
  id: number;
  line: number;
  text: string;
  isLiked: boolean;
  createdAt: Date;
  userId: string;
}

class CommentModel extends Model implements IComment {
  id!: number;
  line!: number;
  text!: string;
  isLiked!: boolean;
  createdAt!: Date;
  userId!: string;

  static fields({ INTEGER, TEXT, BOOLEAN, DATE, STRING }: IFields) {
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
      userId: {
        type: STRING,
        allowNull: false,
      },
    };
  }

  get default() {
    return {
      id: this.id,
      line: this.line,
      text: this.text,
      isLiked: this.isLiked,
      createdAt: this.createdAt,
    };
  }

  static scopes() {
    return {
      defaultScope: {
        attributes: { exclude: ['userId'] },
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
