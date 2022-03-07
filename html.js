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



// Salah
// var http = require('http');
// // var adr = 'https://www.langensari.com/search.php?sayur=wortel&Daging=sapi';
// // var q = url.parse(adr, true);
// var server = http.createServer(function (req, res) {
//     url = new URL('https://www.langensari.com/search.php?sayur=wortel&Daging=sapi');
//     url.parse(adr, true);
//     console.log(req.url);

//     if (req.url == '/') {
//         add.open("")
//         res.write('Selamat Datang Di Halaman Utama: ' + "protocol:" + q.protocol);
//         res.end();
//     }

//     else if (req.url == '/Profil') {
//         res.write('Ini Halaman Profil: ' + "host:" + q.host);
//         res.end();
//     }

//     else if (req.url == '/about') {
//         res.write('Ini Halaman About: ' + "pathname:" + q.pathname);
//         res.end();
//     }

//     else {
//         res.write('Ini Halaman About: ' + "params:" + q.search);
//         res.end();
//     }

// });

// var qdata = q.query;
// server.listen(8084);
// console.log('Server is running on port 8084' + (qdata));

// var url = require('url');
// var adr = 'https://www.langensari.com/search.php?sayur=wortel&Daging=sapi';
// var q = url.parse(adr, true);

// // Hasil Parse URL
// console.log("protocol:" + q.protocol);
// console.log("host:" + q.host);
// console.log("pathname:" + q.pathname);
// console.log("params:" + q.search);

// var qdata = q.query;
// console.log(qdata);

