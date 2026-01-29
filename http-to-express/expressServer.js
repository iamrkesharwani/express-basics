import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express');
});

app.get('/api/data', (req, res) => {
  res.send({ message: 'Hello', data: [] });
});

app.listen(3000, () => console.log('Server running on PORT 3000'));
