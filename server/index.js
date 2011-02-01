exports.NodeMud = require('./server');
exports.createServer = function(options) {
	return new exports.NodeMud(options);
};