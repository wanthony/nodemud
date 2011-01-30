# Introduction

NodeMud is a small project intended to facilitate learning Node.js by creating a multi-user dungeon for HTML5 clients.  The initial idea is to create a basic chat room that can be built upon with MUD features.  See the ROADMAP file for a basic outline of the planned features for the first few releases.

# Dependencies

NodeMud is based on the following libraries:

- **Node.js** v0.3.7+
- **Socket.IO** v0.6.1+

Node can be found at http://nodejs.org.  NodeMud is developed on MacOSX 10.6, but Node.js v0.3.7 should build just fine on other UNIX platforms.  The most recent Node.js version does not compile on Windows (under Cygwin), but hopefully it will be supported soon.

Socket.IO can be found at http://github.com/LearnBoost/Socket.IO (client library - see client/scripts/socket.io.js) and http://github.com/LearnBoost/Socket.IO-node (server library).

The Socket.IO client can be cloned from the git repository (a fairly updated version is included in the NodeMud client/scripts folder).  The server library can be installed using npm.

	npm install socket.io

# Running the Server

The server can be run as follows:

	node server/server.js