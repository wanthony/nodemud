var http = require('http'),
	io = require('socket.io'),
	url = require('url'),
	log = require('util').log,
	settings = require('../shared/settings').settings,
	packet = require('../shared/packet'),
	extend = require('../shared/utils').extend;
	
/**
 * Create the NodeMud server
 *
 * options looks for the following keys:
 * - port - Port to listen on
 *
 * @param options A hash of serer options
 */
var NodeMud = module.exports = function(options) {
	options = extend(options, {
		port: 3000
	});
	
	this.version = settings.version;
	
	this.server = http.createServer(function(req, res) {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('NodeMud Server ' + this.version);
	});
	
	this.server.listen(options.port);
	
	this.socket = io.listen(this.server);
	
	/**
	 * Socket.IO Connection Handler
	 *
	 * Fired whenever a client connects
	 */
	this.socket.on('connect', function(client) {
		log("Client connected");
		packet.broadcastServerMsg(this.socket, "An unknown user has connected!");
		packet.sendServerMsg(client, "Welcome to NodeMud " + settings.version + "!");
		packet.sendServerMsg(client, "Please enjoy your stay!");
	});
};

NodeMud.prototype.settings = settings;