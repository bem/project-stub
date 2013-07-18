var PATH = require('path'),
    environ = require('bem-environ'),
    join = PATH.join,

    PRJ_ROOT = environ.PRJ_ROOT,
    PRJ_TECHS = join(PRJ_ROOT, '.bem/techs'),
    BEMBL_TECHS = environ.getLibPath('bem-bl', 'blocks-common/i-bem/bem/techs');

exports.baseLevelPath = require.resolve('./bundles.js');

exports.getTechs = function() {

    return {
        'bemjson.js'    : join(PRJ_TECHS, 'bemjson.js'),
        'bemdecl.js'    : 'v2/bemdecl.js',
        'deps.js'       : 'v2/deps.js',
        'bemhtml'       : PATH.resolve(BEMBL_TECHS, 'v2/bemhtml.js')
    };

};

// Create bundles in bemjson.js tech
exports.defaultTechs = ['bemjson.js'];
