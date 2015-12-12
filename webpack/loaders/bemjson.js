const bemjsonToDecl = require('bemjson-to-decl');

module.exports = function(source) {
    var bemjson = require(this.resource);
    return bemjsonToDecl.stringify(bemjson);
};
