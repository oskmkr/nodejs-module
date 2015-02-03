/**
 * 
 */

var myGlobal;

exports.setValue = function(val) {
    myGlobal = val;
};

exports.getValue = function(val) {
    return myGlobal;
};

exports.myGlobal;