var PATH = require('path'),
    environ = require('bem-environ'),
    join = PATH.join,

    PRJ_ROOT = environ.PRJ_ROOT,
    PRJ_TECHS = join(PRJ_ROOT, '.bem/techs'),
    BEMCORE_TECHS = environ.getLibPath('bem-core', '.bem/techs');

exports.getTechs = function() {

    return {
        'bemjson.js'         : join(PRJ_TECHS, 'bemjson.js'),
        'bemdecl.js'         : 'v2/bemdecl.js',
        'deps.js'            : 'v2/deps.js',
        'js'                 : 'v2/js-i',
        'vanilla.js'         : join(BEMCORE_TECHS, 'vanilla.js.js'),
        'browser.js'         : join(BEMCORE_TECHS, 'browser.js.js'),
        'browser.js+bemhtml' : join(BEMCORE_TECHS, 'browser.js+bemhtml.js'),
        'css'                : 'v2/css',
        'ie.css'             : 'v2/ie.css',
        'ie6.css'            : 'v2/ie6.css',
        'ie7.css'            : 'v2/ie7.css',
        'ie8.css'            : 'v2/ie8.css',
        'ie9.css'            : 'v2/ie9.css',

        'bemhtml'            : join(BEMCORE_TECHS, 'bemhtml.js'),
        'html'               : join(BEMCORE_TECHS, 'html.js')
    };

};


// Create bundles in bemjson.js tech
exports.defaultTechs = ['bemjson.js'];
