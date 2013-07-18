/* jshint node:true */
/* global MAKE */

require('bem-environ/lib/nodes');

var PATH = require('path'),
    environ = require('bem-environ');

//process.env.YENV = 'production';

MAKE.decl('Arch', {

    blocksLevelsRegexp: /^.+?\.blocks/,
    bundlesLevelsRegexp: /^.+?\.bundles$/,

    libraries: [
        'bem-bl @ 0.3',
        'bem-controls @ v1'
    ]

});


MAKE.decl('BundleNode', {

    getTechs: function() {

        if (PATH.basename(this.level.dir) === 'benchmark.bundles')  {
            return [
                'bemjson.js',
                'bemdecl.js',
                'deps.js',
                'bemhtml'
            ];
        }

        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemhtml',
            'js',
            'css',
            'ie.css',
            'ie7.css',
            'ie8.css',
            'ie9.css',
            'html'
        ];

    },

    getLevels: function(tech) {

        if (PATH.basename(this.level.dir) === 'benchmark.bundles') {
            return [
                'bem-bl/blocks-common',
                'bem-bl/blocks-desktop'
                ]
                .map(function(path) { return PATH.resolve(environ.LIB_ROOT, path); })
                .concat([
                    'common.blocks',
                    'desktop.blocks'
                ]
                .map(function(path) { return PATH.resolve(environ.PRJ_ROOT, path); }));
        }

        return this.__base(tech);

    }

});
