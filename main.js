const http = require('http');

http.createServer((req,res)=>{
res.write("<h1>Hello behn le lodo</h1>");
res.end();
}).listen(3000);