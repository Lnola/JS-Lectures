import express from 'npm:express@4.18.2';
import cors from 'npm:cors';

const users = [
  {
    firstName: 'Lucia',
    lastName: 'Vukorepa',
    image: 'https://www.dump.hr/images/members/active/56.jpg',
  },
  {
    firstName: 'Marija',
    lastName: 'Šustić',
    image: 'https://www.dump.hr/images/members/active/110.jpg',
  },
  {
    firstName: 'Gabriela',
    lastName: 'Bonić',
    image: 'https://www.dump.hr/images/members/active/112.jpg',
  },
  {
    firstName: 'Paula',
    lastName: 'Bonić',
    image: 'https://www.dump.hr/images/members/active/114.jpg',
  },
  {
    firstName: 'Ante',
    lastName: 'Roca',
    image: 'https://www.dump.hr/images/members/active/114.jpg',
  },
  {
    firstName: 'Mirna',
    lastName: 'Pendić',
    image: 'https://www.dump.hr/images/members/active/115.jpg',
  },
];

const app = express();
app.use(cors());
app.use(express.json());

app.get('/users', (_req, res) => {
  return res.status(200).json(users);
});

const authorize = (req, res, next) => {
  const key = '6b6e8a54-affd-11ed-afa1-0242ac120002';
  const message = 'You need the correct api key to access to the resource!';
  if (req.headers.key !== key) return res.status(401).json({ message });
  return next();
};

app.use(authorize);

app.get('/user', (_req, res) => {
  return res.status(200).json(users[Math.floor(Math.random() * users.length)]);
});

app.get('/user/:id', (req, res) => {
  const id = req.params.id - 1;
  const message = `Resource with id ${id + 1} doesn't exist!`;
  if (id >= users.length || id < 0) return res.status(404).json({ message });
  return res.status(200).json(users[id]);
});

app.post('/create', (req, res) => {
  const { firstName, lastName, image } = req.body;
  users.push({ firstName, lastName, image });
  return res.status(201).json({ userId: users.length });
});

app.listen(8000, () => console.log('App listening on port 8000!'));
