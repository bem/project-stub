const bemjsonToDecl = require('bemjson-to-decl');

module.exports = function(source) {
    var bemjson = this.exec(source);
    return bemjsonToDecl.stringify(bemjson);
};
