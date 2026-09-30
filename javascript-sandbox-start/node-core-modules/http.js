const http = require('http');

const server = http.createServer((request, response) => {
  const utl = request.url;

  console.log(request.url);
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
