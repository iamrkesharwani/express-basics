import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Express');
});

app.get('/api/data', (req, res) => {
  res.send({ message: 'Hello', data: [] });
});

app.post('/data', (req, res) => {
  const userData = req.body;
  res.status(201).json({
    status: 'Created',
    received: userData,
  });
});

app.use((req, res) => {
  res.status(404).send('Not found');
});

app.listen(3000, () => console.log('Server running on PORT 3000'));
