var PATH = require('path'),

    pjoin = PATH.join,
    presolve = PATH.resolve.bind(null, __dirname),

    PRJ_ROOT = presolve('../../'),

    BEMCORE_TECHS = pjoin(PRJ_ROOT, 'bem-core/.bem/techs');


exports.getTechs = function() {

    return {
        'js'            : pjoin(BEMCORE_TECHS, 'browser.js.js'),
        'css'           : 'css',
        'ie.css'        : 'ie.css',
        'ie6.css'       : 'ie6.css',
        'ie7.css'       : 'ie7.css',
        'ie8.css'       : 'ie8.css',
        'ie9.css'       : 'ie9.css',

        'bemhtml'       : pjoin(BEMCORE_TECHS, 'bemhtml.js')
    };

};

exports.defaultTechs = ['css', 'js', 'bemhtml'];
