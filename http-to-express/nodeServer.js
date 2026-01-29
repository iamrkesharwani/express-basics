import http from 'node:http';

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello from Node.js');
  } else if (req.url === '/api/data' && req.method === 'GET') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ message: 'Success', data: [] }));
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(3000, () => console.log('Server running on PORT 3000'));
