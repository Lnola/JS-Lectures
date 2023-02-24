import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const authorize = (req: Request, res: Response, next: NextFunction) => {
  const key = '6b6e8a54-affd-11ed-afa1-0242ac120002';
  const message = 'You need the correct api key to access to the resource!';
  if (req.headers.key !== key) return res.status(401).json({ message });
  return next();
};

app.use(authorize);

app.get('/user', (_req: Request, res: Response) => {
  return res.status(200).json(users[Math.floor(Math.random() * users.length)]);
});

app.get('/user/:id', (req: Request, res: Response) => {
  const id = req.params.id - 1;
  const message = `Resource with id ${id + 1} doesn't exist!`;
  if (id >= users.length || id < 0) return res.status(404).json({ message });
  return res.status(200).json(users[id]);
});

app.post('/create', (req: Request, res: Response) => {
  const { firstName, lastName, image } = req.body;
  users.push({ firstName, lastName, image });
  return res.status(201).json({ userId: users.length });
});

app.listen(8000, () => console.log('App listening on port 8000!'));
