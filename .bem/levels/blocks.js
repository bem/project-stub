var PATH = require('path'),
    environ = require('bem-environ'),
    join = PATH.join,

    PRJ_ROOT = environ.PRJ_ROOT,
    PRJ_TECHS = join(PRJ_ROOT, '.bem/techs'),
    BEMCORE_TECHS = environ.getLibPath('bem-core', '.bem/techs');

exports.getTechs = function() {

    return {
        'vanilla.js'    : join(BEMCORE_TECHS, 'vanilla.js.js'),
        'browser.js'    : join(BEMCORE_TECHS, 'browser.js.js'),
        'node.js'       : join(BEMCORE_TECHS, 'node.js.js'),
        'css'           : 'css',
        'ie.css'        : 'ie.css',
        'ie6.css'       : 'ie6.css',
        'ie7.css'       : 'ie7.css',
        'ie8.css'       : 'ie8.css',
        'ie9.css'       : 'ie9.css',

        'bemhtml'       : join(BEMCORE_TECHS, 'bemhtml.js')
    };

};

exports.defaultTechs = ['css', 'browser.js', 'bemhtml'];
