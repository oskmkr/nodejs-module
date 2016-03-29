var keywords = require('../model/keywords').keywords;

var keywordBO = {};

keywordBO.read = function() {
    return keywords;
}

module.exports = keywordBO;