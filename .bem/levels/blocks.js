var PATH = require('path'),

    pjoin = PATH.join,
    presolve = PATH.resolve.bind(null, __dirname),

    environ = require('../environ'),

    PRJ_ROOT = environ.PRJ_ROOT,
    PRJ_TECHS = pjoin(PRJ_ROOT, '.bem/techs'),
    BEMBL_TECHS = environ.getLibPath('bem-bl', 'blocks-common/i-bem/bem/techs');


exports.getTechs = function() {

    return {
        'js'            : pjoin(BEMBL_TECHS, 'js.js'),
        'css'           : 'css',
        'ie.css'        : 'ie.css',
        'ie6.css'       : 'ie6.css',
        'ie7.css'       : 'ie7.css',
        'ie8.css'       : 'ie8.css',
        'ie9.css'       : 'ie9.css',

        'bemhtml'       : pjoin(BEMBL_TECHS, 'bemhtml.js'),
    };

};

exports.defaultTechs = ['css', 'js', 'bemhtml'];
