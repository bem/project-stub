/* jshint node:true */


//process.env.YENV = 'production';
//process.env.XJST_ASYNCIFY = 'yes';
//
var PATH = require('path'),
    environ = require('bem-environ');

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
                    'html',
                    'min.css',

                    {
                        'min.ie.css': {
                            baseTechPath: 'v2/min',

                            getSuffixes: function() {
                                return ['ie.css'];
                            },

                            getDependencies: function() {
                                return ['css', 'ie.css'];
                            }
                        },

                        'min.js': {
                            baseTechPath: 'v2/min.js.js',

                            getDependecies: function() {
                                return ['browser.js+bemhtml'];
                            }
                        }
                    }
                )
                .setDefaultTechs('bemjson.js')
                .setBundleBuildLevels([
                    'bem-core',
                    'bem-components'
                ].reduce(function(levels, lib) {
                    return levels.concat([
                        environ.getLibPath(lib, 'common.blocks'),
                        environ.getLibPath(lib, 'desktop.blocks')
                    ]);
                }, []).concat(
                    PATH.join(environ.PRJ_ROOT, 'desktop.blocks')
                ))
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
        environ.extendMake(registry);

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
                    'min.js',
                    'min.css',
                    'min.ie.css',
                    'html'
                ];

            },

            //'create-browser.js+bemhtml-optimizer-node': function(tech, sourceNode, bundleNode) {
                //sourceNode.getFiles().forEach(function(f) {
                    //this['create-js-optimizer-node'](tech, this.ctx.arch.getNode(f), bundleNode);
                //}, this);
            //}

        });
    });
};

