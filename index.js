var http = require('http');
const port = process.env.PORT||9000
  
  http.createServer(function(req, res, next) {
    res.writeHead(200, {'Content-type' : 'text/plain'});
    res.end("{'succes' : true, 'data' : 'index' 'massage' : 'hello world', 'status' : 200}");
    console.log('yeey jadi...');
  })
  
  .listen(port);

