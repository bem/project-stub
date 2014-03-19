/* jshint node:true */
/* global MAKE */

var environ = require('bem-environ')(__dirname);
environ.extendMake(MAKE);

//process.env.YENV = 'production';
//process.env.XJST_ASYNCIFY = 'yes';

MAKE.decl('Arch', {

    blocksLevelsRegexp: /^.+?\.blocks/,
    bundlesLevelsRegexp: /^.+?\.bundles$/,

    libraries: [
        'bem-core @ v2.0.0',
        'bem-components @ 79ca4740c605339941e2a560c6681bfea02f00b3'
    ]

});


MAKE.decl('BundleNode', {

    getTechs: function() {

        return [
            'xml',
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemtree.xsl',
            'browser.js+bemhtml',
            'css',
            'ie.css',
            'html.xsl',
            'html'
        ];

    },

    'create-bemjson.js-node': function(tech, bundleNode, magicNode) {

        return this.setBemCreateNode(
            tech,
            this.level.resolveTech(tech),
            bundleNode,
            magicNode);
    },

    'create-xml-node': function(tech, bundleNode, magicNode) {

        return this.setBemCreateNode(
            tech,
            this.level.resolveTech(tech),
            bundleNode,
            magicNode);
    }

});

MAKE.decl('BundlesLevelNode', {
    getBundleSourceTechs: function() {
        return ['xml', 'bemjson.js', 'bemdecl.js'];
    }
});
