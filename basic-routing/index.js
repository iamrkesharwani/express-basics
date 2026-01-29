import express from 'express';
const app = express();
app.use(express.json());

app.get('/users', (req, res) => {
  res.status(200).json({ message: 'List of users' });
});

app.post('/users', (req, res) => {
  const userData = req.body;
  if (!userData.name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  res.status(201).json({ message: 'User Created', data: userData });
});

app.put('/users', (req, res) => {
  res.status(204).send();
});

app.delete('/users', (req, res) => {
  res.status(200).json({ message: 'User Deleted' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(3000, () => console.log('Server running on 3000'));
