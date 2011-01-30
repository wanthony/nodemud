var http = require('http'),
	io = require('socket.io'),
	url = require('url'),
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
	
	this.version = 'v0.0.1';
	
	this.server = http.createServer(function(req, res) {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('NodeMud Server ' + this.version);
	});
	
	this.server.listen(options.port);
	
	this.socket = io.listen(this.server);
}