var http = require('http');
var uc = require('D:/node_modules/upper-case');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(uc("Hello World!"));
    res.end();
}).listen(8080);