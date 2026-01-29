import express from 'express';
const app = express();
app.use(express.json());

app.get('/search', (req, res) => {
  let { q, limit = '10', page = '1' } = req.query;
  const parsedLimit = parseInt(limit);
  const parsedPage = parseInt(page);
  const searchTerm = q ? q.toString().toLowerCase() : 'all';

  if (isNaN(parsedLimit) || isNaN(parsedPage)) {
    return res.status(400).json({
      error: 'Bad Request',
      message: 'Limit and Page must be valid numbers',
    });
  }

  if (parsedLimit < 1 || parsedLimit > 100) {
    return res.status(400).json({
      error: 'Validation Failed',
      message: 'Limit must be between 1 and 100.',
    });
  }

  res.json({
    success: true,
    filters: {
      searchingFor: searchTerm,
      limit: parsedLimit,
      page: parsedPage,
    },
    message: `Showing results for ${searchTerm} with limit ${parsedLimit}`,
  });
});

app.listen(3000, () => console.log('Running in PORT 3000'));
