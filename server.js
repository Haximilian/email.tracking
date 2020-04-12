var http = require('http');
var fs = require('fs');

//create a server object:
http.createServer(function (req, res) {
  var s = fs.createReadStream('./goldstar.png');
  console.log(req.rawHeaders)
  s.on('open', function () {
      res.setHeader('Content-Type', 'image/png');
      s.pipe(res);
  });
  s.on('error', function () {
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 404;
      res.end('Not found');
  });
}).listen(8080, '192.168.1.138');