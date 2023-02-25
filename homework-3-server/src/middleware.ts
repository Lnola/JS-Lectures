import { NextFunction, Request, Response } from 'express';

export const authorize = (req: Request, res: Response, next: NextFunction) => {
  const key = '6b6e8a54-affd-11ed-afa1-0242ac120002';
  const message = 'You need the correct api key to access to the resource!';
  if (req.headers.key !== key) return res.status(401).json({ message });
  return next();
};
