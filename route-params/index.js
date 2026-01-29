import express from 'express';
const app = express();
app.use(express.json());

app.get('/users/me', (req, res) => {
  res.json({ message: 'This is your profile' });
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;

  if (isNaN(id)) {
    return res
      .status(400)
      .json({ error: 'Invalid User ID format. Must be a number.' });
  }

  if (parseInt(id) > 100) {
    return res.status(404).json({ error: 'User ID not found in database' });
  }

  res.send(`User details for ID: ${id}`);
});

app.get('/users/:userId/posts/:postId', (req, res) => {
  const { userId, postId } = req.params;

  res.json({
    message: `Fetching post ${postId} for user ${userId}`,
    paramsReceived: req.params,
  });
});

app.get('/profile', (req, res) => {
  return res.status(400).json({
    error: 'Missing parameter',
    message: 'Username is required to view profile',
  });
});

app.get('/profile/:username', (req, res) => {
  const { username } = req.params;
  const alphaRegex = /^[A-Za-z]+$/;

  if (!alphaRegex.test(username)) {
    return res.status(422).json({
      error: 'Invalid Parameter',
      message: 'Username must contain only letters.',
    });
  }

  res.json({ message: `Welcome to ${username}'s profile` });
});

app.listen(3000, () => console.log('Project running in 3000'));
