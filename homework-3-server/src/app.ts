import express from 'express';
import cors from 'cors';
import { authorize } from 'middleware';
import { router } from 'controller';

const app = express();

app.use(cors());
app.use(express.json());
app.use(authorize);

app.use(router);

app.listen(8000, () => console.log('App listening on port 8000!'));
