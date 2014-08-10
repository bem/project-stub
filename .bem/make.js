/* global MAKE:false */

//process.env.YENV = 'production';

var PATH = require('path');

MAKE.decl('Arch', {
    blocksLevelsRegexp: /^.+?\.blocks/,
    bundlesLevelsRegexp: /^.+?\.bundles$/
});


MAKE.decl('BundleNode', {
    getTechs: function() {
        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemhtml',
            'js+bemhtml',
            'css',
            'ie.css',
            'html'
        ];
    },

    getForkedTechs : function() {
        return this.__base().concat(['js+bemhtml']);
    },

    'create-js+bemhtml-optimizer-node': function(tech, sourceNode, bundleNode) {
        return this['create-js-optimizer-node'].apply(this, arguments);
    },

    getLevelsMap : function() {
        return {
            desktop : [
                'libs/bem-bl/blocks-common',
                'libs/bem-bl/blocks-desktop',
                'common.blocks',
                'desktop.blocks'
            ]
        };
    },

     getLevels : function() {
        var resolve = PATH.resolve.bind(PATH, this.root),
            buildLevel = this.getLevelPath().split('.')[0],
            levels = this.getLevelsMap()[buildLevel] || [];

        return levels
            .map(function(path) { return resolve(path); })
            .concat(resolve(PATH.dirname(this.getNodePrefix()), 'blocks'));
    },
});
