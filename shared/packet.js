/**
 * Network Packet Class
 *
 * Builds network packets with JSON
 */

/**
 * Build a new packet object
 *
 * @param opts Options hash
 *
 * opts expects at least a Socket.IO socket object in opts.socket
 */
var Packet = module.exports = function(opts) {
	this.socket = opts.socket;
}

/**
 * Build and send a JSON packet to all clients
 */
Packet.prototype.broadcast = function(object) {
	this.socket.broadcast(JSON.stringify(object));
}

/**
 * Send a packet to a specific client
 */
Packet.prototype.send = function(client, object) {
	client.send(JSON.stringify(object));
}