/*global MAKE:true */
var BEM = require('bem'),
    Q = BEM.require('q'),
    PATH = require('path');

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

MAKE.decl('BlockNode', {
    make: function() {
        var _this = this;

        return Q.when(this.__base.apply(this, arguments))
            .then(function() {
                if (_this.item.suffix != '.images.json') return;

                return require('borschik').api({
                    input: require('path').join(_this.level.dir, _this.item.block,  _this.item.block + _this.item.suffix),
                    output: require('path').join(_this.level.dir, _this.item.block,  '_' + _this.item.block + _this.item.suffix),
                    tech: 'json-links'
                });
            }
        );
    }
});
