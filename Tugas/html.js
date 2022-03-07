var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': "text/html" });
    res.write(
        "<center><a href=/home> Home </a><a href=/about>about</a><a href=/profile>profil</a></center>")
    var url = req.url;

    if (url === "/") {
        res.write("This is the content of the page");
        res.end();
    } else if (url === "/home") {
        res.write("home")
        res.end();
    } else if (url === "/about") {
        res.write("about")
        res.end();
    } else if (url === "/profil") {
        res.write("profil")
        res.end();
    } else {
        res.write("x");
        res.end();
    }
}).listen(2000, function () {
    console.log("server start at port http://localhost:2000");
})

