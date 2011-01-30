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
		var packet = JSON.parse(data);
		
		if (packet.type == 'CONN') {
			console.log("Connection packet received...");
			console.log("Nick: " + packet.nick);
		}
		
		if (packet.type == 'MSG') {
			var msg_pkg = {
				nick: packet.nick,
				type: 'MSG',
				message: packet.message
			}
			
			sock.broadcast(JSON.stringify(msg_pkg));
		}
	});
});