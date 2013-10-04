/* jshint node:true */


//process.env.YENV = 'production';
//process.env.XJST_ASYNCIFY = 'yes';
//
var PATH = require('path');

module.exports = function(make) {
    make.levels(function(levels) {
        levels
            .useNpmModule('bem-techs-core')
            .addLevel('*.bundles')
                .addTechs(
                    'bemjson.js',
                    'bemdecl.js',
                    'deps.js',
                    {'js': 'v2/js-i'},
                    'vanilla.js',
                    'browser.js',
                    'browser.js+bemhtml',
                    'css',
                    'ie.css',
                    'ie6.css',
                    'ie7.css',
                    'ie8.css',
                    'ie9.css',
                    'bemhtml',
                    'html'
                )
                .setDefaultTechs('bemjson.js')
                .setBundleBuildLevels(
                    PATH.resolve(__dirname, '../libs/bem-core/common.blocks'),
                    PATH.resolve(__dirname, '../libs/bem-core/desktop.blocks'),
                    PATH.resolve(__dirname, '../libs/bem-components/common.blocks'),
                    PATH.resolve(__dirname, '../libs/bem-components/desktop.blocks'),
                    PATH.resolve(__dirname, '../libs/desktop.blocks')
                )
            .addLevel('*.blocks')
                .addTechs(
                    {
                        'title.txt': 'title.txt',
                        'desc.wiki': '',
                        'i18n.title.txt': '',
                        'i18n.desc.wiki': ''
                    },
                    'deps.js',
                    {'js': 'v2/js-i'},
                    'css',
                    'ie.css',
                    'ie6.css',
                    'ie7.css',
                    'ie8.css',
                    'ie9.css',
                    'bemhtml',
                    'vanilla.js',
                    'browser.js'
                )
                .setDefaultTechs('css', 'js', 'bemhtml');
    });

    make.nodes(function(registry) {
        require('bem-environ').extendMake(registry);

        registry.decl('Arch', {

            blocksLevelsRegexp: /^.+?\.blocks/,
            bundlesLevelsRegexp: /^.+?\.bundles$/,
        });


        registry.decl('BundleNode', {

            getTechs: function() {

                return [
                    'bemjson.js',
                    'bemdecl.js',
                    'deps.js',
                    'bemhtml',
                    'browser.js+bemhtml',
                    'css',
                    'ie.css',
                    'ie7.css',
                    'ie8.css',
                    'ie9.css',
                    'html'
                ];

            },

            'create-browser.js+bemhtml-optimizer-node': function(tech, sourceNode, bundleNode) {
                sourceNode.getFiles().forEach(function(f) {
                    this['create-js-optimizer-node'](tech, this.ctx.arch.getNode(f), bundleNode);
                }, this);
            }

        });
    });
};

