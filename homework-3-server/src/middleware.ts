import { NextFunction, Request, Response } from 'express';

export const authorize = (req: Request, res: Response, next: NextFunction) => {
  const users = [
    'dbaric99',
    'dariomrk',
    'drmodun',
    'JosipaSaravanja',
    'lovretomic',
    'markojokic27',
    'tsiklic1',
    'tester',
  ];
  const message = 'You need the correct api key to access to the resource!';
  if (!users.includes(req.headers.key as string))
    return res.status(401).json({ message });
  return next();
};
