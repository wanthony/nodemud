/**
 * Implements various utility methods
 */

/**
 * Merge source hash into dest
 *
 * Returns dest
 *
 * @param dest Destination hash
 * @param source Source hash
 */
exports.extend = function(dest, source) {
	for (var property in source) {
		if (source.hasOwnProperty(property)) {
			dest[property] = source[property]
		}
	}
	
	return dest;
};