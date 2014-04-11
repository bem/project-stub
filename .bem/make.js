/* global MAKE:false */

// process.env.YENV = 'production';

var PATH = require('path');

require('bem-tools-autoprefixer').extendMake(MAKE);

MAKE.decl('Arch', {

    blocksLevelsRegexp : /^.+?\.blocks/,
    bundlesLevelsRegexp : /^.+?\.bundles$/

});


MAKE.decl('BundleNode', {

    getTechs : function() {

        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemhtml',
            'browser.js+bemhtml',
            'roole',
            'css',
            'html'
        ];

    },

    getForkedTechs : function() {
        return this.__base().concat(['browser.js+bemhtml', 'roole']);
    },

    getLevelsMap : function() {
        return {
            desktop : [
                'libs/bem-core/common.blocks',
                'libs/bem-core/desktop.blocks',
                'libs/bem-components/common.blocks',
                'libs/bem-components/desktop.blocks',
                'libs/bem-components/design/common.blocks',
                'libs/bem-components/design/desktop.blocks',
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

    'create-css-node' : function(tech, bundleNode, magicNode) {
        var source = this.getBundlePath('roole');
        if(this.ctx.arch.hasNode(source)) {
            return this.createAutoprefixerNode(tech, this.ctx.arch.getNode(source), bundleNode, magicNode);
        }
    }

});

MAKE.decl('AutoprefixerNode', {

    getBrowsers : function() {
        return [
            'last 2 versions',
            'ie 10',
            'ff 24',
            'opera 12.16'
        ];
    }

});
