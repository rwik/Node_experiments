const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World');
});

server.listen(3000,'(localhost)',()=>{
    console.log('Server is listening on port 3000');
});


