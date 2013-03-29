var PATH = require('path'),

    pjoin = PATH.join,
    presolve = PATH.resolve.bind(null, __dirname),

    PRJ_ROOT = presolve('../../'),

    PRJ_TECHS = presolve('../techs/');


exports.getTechs = function() {

    return {
        'bemjson.js'    : pjoin(PRJ_TECHS, 'bemjson.js'),
        'bemdecl.js'    : 'bemdecl.js',
        'deps.js'       : 'deps.js',
        'js'            : 'js-i',
        'less'          : pjoin(PRJ_TECHS, 'less.js'),
        'css'           : 'css',

        'bemhtml'       : pjoin(PRJ_ROOT, 'bemhtml/.bem/techs/bemhtml.js'),
        'html'          : pjoin(PRJ_ROOT, 'bemhtml/.bem/techs/bemjson2html.js')
    };

};


// Create bundles in bemjson.js tech
exports.defaultTechs = ['bemjson.js'];

