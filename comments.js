// 引入 http 模組
const http = require('http');

// 建立伺服器
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

// 監聽 3000 port
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});