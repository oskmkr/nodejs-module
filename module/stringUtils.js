/**
 * 
 * @author oskmkr@gmail.com
 */

/**
 * isEmpty('abc') // false isEmpty('') // true isEmpty(' ') // false
 * 
 * @return
 */
var isEmpty = function(str) {
    if (str === undefined) {
	return true;
    }

    if (str.length == 0) {
	return true;
    }

    return false;
}

/**
 * isBlank('abc') // false isBlank('') // true isBlank(' ') // true
 * 
 * @return
 */
var isBlank = function(str) {
    if (str === undefined) {
	return true;
    }

    if (str.trim().length == 0) {
	return true;
    }

    return false;
}

exports.isEmpty = isEmpty;
exports.isBlank = isBlank;
