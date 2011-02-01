/**
 * NodeMud Packets
 */

// Required Modules
var settings = require('./settings').settings,
	extend = require('./utils').extend;

/**
 * The base packet object
 *
 * For now we just send a server version with each packet
 */
var packet = {
	version: settings.version
};

/**
 * Send a generic packet
 *
 * @param client Clent to send the packet to
 * @param packet_type Type of packet
 * @param packet_data Data for the packet.  This structure will vary based on packet_type
 */
exports.sendPacket = function(client, packet_type, packet_data) {
	var p = extend(packet, {
		type: packet_type,
		data: packet_data
	});
	
	client.send(JSON.stringify(p));
};

/**
 * Broadcast a packet to all clients on the socket
 */
exports.broadcastPacket = function(socket, packet_type, packet_data) {
	var p = extend(packet, {
		type: packet_type,
		data: packet_data
	});
	
	socket.broadcast(JSON.stringify(p));
}

/**************************************************/
/**
 * Chat Packet
 *
 * Structure:
 * - version: Server version
 * - type: 'CHAT'
 * - data:
 * 		- nick: Nickname of the user sending the message
 *		- msg: The chat message
 */

/**
 * Send a chat message to a single client
 */
exports.sendChatMsg = function(client, nickname, message) {
	var p = {
		nick: nickname,
		msg: message
	};
	
	exports.sendPacket(client, 'CHAT', p);
};

/**
 * Broadcast a chat message to all clients
 */
exports.broadcastChatMsg = function(socket, nickname, message) {
	var p = {
		nick: nickname,
		msg: message
	};
	
	exports.broadcastPacket(socket, 'CHAT', p);
};

exports.sendServerMsg = function(client, message) {
	exports.sendChatMsg(client, 'server', message);
};

exports.broadcastServerMsg = function(socket, message) {
	exports.broadcastServerMsg(socket, message);
};