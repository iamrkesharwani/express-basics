import express from 'express';
const app = express();

app.get('/users/:id/posts', (req, res) => {
  const { id } = req.params;
  const { status, sort = 'asc' } = req.query;

  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  const validStatuses = ['published', 'draft'];
  if (status && !validStatuses.includes(status)) {
    return res.status(400).json({
      error: 'Invalid status',
      message: 'Status must be "published" or "draft"',
    });
  }

  res.json({
    userId: parseInt(id),
    filters: {
      status: status || 'all',
      sortOrder: sort,
    },
    message: `Fetching ${status || 'all'} posts for user ${id} sorted by ${sort}`,
  });
});

app.listen(3000, () => console.log('Server running in PORT 3000'));
