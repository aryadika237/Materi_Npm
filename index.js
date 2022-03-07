var http = require('http');

var server = http.createServer(function (req, res) {
    res.end("Hi, Selamat Datang Di Binus");
});

server.listen(2000);

console.log("server running on http://localhost:2000");