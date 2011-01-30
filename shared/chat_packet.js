var packet = require('./packet');

var ChatPacket = module.exports = function(opts) {
	this.packet = new Packet(opts);
}

ChatPacket.prototype.send = 