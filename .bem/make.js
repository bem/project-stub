/*global MAKE:true */

"use strict";

//process.env.YENV = 'production';

MAKE.decl('Arch', {

    blocksLevelsRegexp: /^.+?\.blocks/,

    bundlesLevelsRegexp: /^.+?\.bundles$/,

    getLibraries: function() {

        return {
            'bem-core': {
                type: 'git',
                url: 'git@github.com:bem/bem-core.git',
                branch: 'feature/js-syntax'
            }
        };

    }

});


MAKE.decl('BundleNode', {

    getTechs: function() {
        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemhtml',
            'browser.js',
            'css',
            'ie.css',
            'ie6.css',
            'ie7.css',
            'ie8.css',
            'ie9.css',
            'html'
        ];
    }

});
