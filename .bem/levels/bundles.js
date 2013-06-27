var PATH = require('path'),

    pjoin = PATH.join,
    presolve = PATH.resolve.bind(null, __dirname),

    PRJ_ROOT = presolve('../../'),

    PRJ_TECHS = presolve('../techs/'),
    BEMCORE_TECHS = pjoin(PRJ_ROOT, 'bem-core/.bem/techs');


exports.getTechs = function() {

    return {
        'bemjson.js'    : pjoin(PRJ_TECHS, 'bemjson.js'),
        'bemdecl.js'    : 'bemdecl.js',
        'deps.js'       : 'deps.js',
        'js'            : 'js',
        'vanilla.js'    : pjoin(BEMCORE_TECHS, 'vanilla.js.js'),
        'browser.js'    : pjoin(BEMCORE_TECHS, 'browser.js.js'),
        'css'           : 'css',
        'ie.css'        : 'ie.css',
        'ie6.css'       : 'ie6.css',
        'ie7.css'       : 'ie7.css',
        'ie8.css'       : 'ie8.css',
        'ie9.css'       : 'ie9.css',

        'bemhtml'       : pjoin(BEMCORE_TECHS, 'bemhtml.js'),
        'html'          : pjoin(BEMCORE_TECHS, 'html.js')
    };

};


// Create bundles in bemjson.js tech
exports.defaultTechs = ['bemjson.js'];

