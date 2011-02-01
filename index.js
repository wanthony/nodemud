var createServer = require('./server').createServer,
	log = require('util').log;
	
var NodeMud = createServer({port: 3000});	

log("Starting NodeMud Server " + NodeMud.settings.version);