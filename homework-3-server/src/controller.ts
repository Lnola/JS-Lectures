import { Request, Response, Router } from 'express';
import { Comment } from 'db';
import { code } from 'consts';
import CommentModel from 'model';

const fetchCode = (_req: Request, res: Response) => {
  return res.status(200).json({ code });
};

const fetchAll = async (_req: Request, res: Response) => {
  try {
    const comments = await Comment.findAll();
    return res.status(200).json({ comments });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const fetchById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findByPk(id);
    if (!comment)
      return res
        .status(404)
        .json({ message: `Comment with id ${id} doesn't exist!` });
    return res.status(200).json({ comment });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const { line, text } = req.body;
    if (!line || !text) throw 'Comment is missing parameters!';
    const newComment = {
      line,
      text,
      isLiked: false,
      createdAt: new Date(),
      userId: req.headers.key,
    };
    const comment = (await Comment.create(newComment)) as CommentModel;
    return res.status(201).json({ comment: comment.default });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const updateIsLiked = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { isLiked } = req.body;
    if (isLiked == null) throw 'Comment is missing isLiked parameter';
    const comment = (await Comment.findByPk(id)) as CommentModel;
    if (!comment)
      return res
        .status(404)
        .json({ message: `Comment with id ${id} doesn't exist!` });
    comment.isLiked = isLiked;
    await comment.save();
    return res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findByPk(id);
    if (!comment)
      return res
        .status(404)
        .json({ message: `Comment with id ${id} doesn't exist!` });
    await comment?.destroy();
    return res.status(204).send();
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

export const router = Router();

router
  .get('/code', fetchCode)
  .get('/comments', fetchAll)
  .get('/comments/:id', fetchById)
  .post('/create', create)
  .put('/update-is-liked/:id', updateIsLiked)
  .delete('/remove/:id', remove);
