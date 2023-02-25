import { Request, Response, Router } from 'express';
import { Comment } from 'db';

const fetchComments = async (req: Request, res: Response) => {
  try {
    const comment = await Comment.findByPk(2);
    return res.send(comment);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export const router = Router();

router.get('/', fetchComments);
