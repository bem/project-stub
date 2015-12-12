const utils = require('loader-utils');

module.exports = function() {
    var template = require(this.resource);
    //utils.stringifyRequest(this, require.resolve('./runtime'))
    return `module.exports = (${template.toString()})(require('${require.resolve('./runtime')}'))`
};
