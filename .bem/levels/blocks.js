var PATH = require('path'),
    PRJ_TECHS = PATH.resolve(__dirname, '..', 'techs'),
    BEMCORE_TECHS = PATH.resolve(__dirname, '..', '..', 'libs', 'bem-core', '.bem', 'techs');

exports.getTechs = function() {
    return {
        'stylus'     : 'v2/styl',
        'css'        : 'v2/css',
        'ie.css'     : 'v2/ie.css',
        'ie8.css'    : 'v2/ie8.css',
        'ie9.css'    : 'v2/ie9.css',
        'js'         : 'v2/js-i',
        'bemdecl.js' : 'v2/bemdecl.js',
        'deps.js'    : 'v2/deps.js',
        'bemjson.js' : PATH.join(PRJ_TECHS, 'bemjson.js.js'),
        'bemhtml'    : PATH.join(BEMCORE_TECHS, 'bemhtml.js'),
        'bemtree'    : PATH.join(BEMCORE_TECHS, 'bemtree.js'),
        'vanilla.js' : PATH.join(BEMCORE_TECHS, 'vanilla.js.js'),
        'browser.js' : PATH.join(BEMCORE_TECHS, 'browser.js.js'),
        'node.js'    : PATH.join(BEMCORE_TECHS, 'node.js.js')
    };
};

exports.defaultTechs = ['css', 'browser.js'];
