/* jshint node:true */
/* global MAKE */

//process.env.YENV = 'production';
//process.env.XJST_ASYNCIFY = 'yes';

var environ = require('bem-environ')(__dirname);
environ.extendMake(MAKE);

MAKE.decl('Arch', {

    blocksLevelsRegexp: /^.+?\.blocks/,
    bundlesLevelsRegexp: /^.+?\.bundles$/,

    libraries: [
        'bem-bl @ 0.3',
        'bem-components @ v1'
    ]

});


MAKE.decl('BundleNode', {

    getTechs: function() {

        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemhtml',
            'js',
            'css',
            'ie.css',
            'html'
        ];

    }

});
