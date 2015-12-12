const bem = require('bem-xjst');

module.exports = function(source) {
    this.cacheable();
    var generated = bem.generate(source);
    return generated;
};
