const bemjsonToDecl = require('bemjson-to-decl');

module.exports = function(source) {
    var bemjson = this.exec(source);
    return 'module.exports = ' + bemjsonToDecl.stringify(bemjson);
};
