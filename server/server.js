var http = require('http'),
	io = require('socket.io'),
	url = require('url');
	
var server = http.createServer(function(req, res) {
	var parts = url.parse(req.url, true);
	
	if (parts.pathname == "/") {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('NodeMud Server v0.0.1');
	}
});

server.listen(8080);

var sock = io.listen(server);

sock.on('connection', function(client) {
	client.on('message', function(data) {
		console.log("Received " + data);
		sock.broadcast(data);
	});
});