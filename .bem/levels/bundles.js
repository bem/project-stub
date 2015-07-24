var PATH = require('path'),
    BEMCORE_TECHS = PATH.resolve(__dirname, '..', 'libs', 'bem-core', '.bem', 'techs');

exports.baseLevelPath = require.resolve('./blocks');

exports.getTechs = function() {
    var techs = this.__base();
    techs['browser.js+bemhtml'] = PATH.join(BEMCORE_TECHS, 'browser.js+bemhtml.js');
    techs['html'] = PATH.join(BEMCORE_TECHS, 'html.js');

    return techs;
};

// Create bundles in bemjson.js tech
exports.defaultTechs = ['bemjson.js'];
