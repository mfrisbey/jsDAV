var Fs = require('fs');

/**
 * jsDAV version number
 */
exports.getVersion = function() {
	JSON.parse(Fs.readFileSync(__dirname + "/../../package.json")).version;
};

/**
 * Nodes that are files, should have this as the type property
 */
exports.NODE_FILE      = 1;

/**
 * Nodes that are directories, should use this value as the type property
 */
exports.NODE_DIRECTORY = 2;
