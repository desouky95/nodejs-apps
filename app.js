var http = require('http');
var zlib = require('zlib');
var fs = require('fs');
var dt = require('./date');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var zlib = require('zlib');
	var fs = require('fs');
	var gzip = zlib.createGzip();
	var r = fs.createReadStream('./hello.txt');
	var w = fs.createWriteStream('./hello.txt.gz');
	r.pipe(gzip).pipe(w);;
    res.end();
}).listen(8080);