/*global MAKE:true */
var PATH = require('path');

"use strict";

//process.env.YENV = 'production';

MAKE.decl('Arch', {

    blocksLevelsRegexp: /^.+?\.blocks/,
    bundlesLevelsRegexp: /^.+?\.bundles$/,

    getLibraries: function() {

        return {
            'bem-bl': {
                type: 'git',
                url: 'git://github.com/bem/bem-bl.git',
                treeish: '0.3'
            }
        };

    }

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
            'ie6.css',
            'ie7.css',
            'ie8.css',
            'ie9.css',
            'html'
        ];

    },

    getLevels: function(tech) {

        if (PATH.basename(this.level.dir) === 'benchmark.bundles') {
            return ['../bem-bl/blocks-common',
                    '../bem-bl/blocks-desktop',
                    '../common.blocks',
                    '../desktop.blocks']
                .map(function(path) { return PATH.resolve(__dirname, path) } );
        }

        return this.__base(tech);

    }

});
