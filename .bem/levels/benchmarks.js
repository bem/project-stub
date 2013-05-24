var PATH = require('path');

exports.baseLevelPath = require.resolve('./bundles.js');

exports.getTechs = function() {

    return {
        'bemjson.js'    : PATH.resolve(__dirname, '../techs/bemjson.js'),
        'bemdecl.js'    : 'bemdecl.js',
        'deps.js'       : 'deps.js',
        'bemhtml'       : PATH.resolve(__dirname, '../../bem-bl/blocks-common/i-bem/bem/techs/bemhtml.js')
    };

};

// Create bundles in bemjson.js tech
exports.defaultTechs = ['bemjson.js'];
