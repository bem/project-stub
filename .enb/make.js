var techs = {
        // essential
        fileProvider: require('enb/techs/file-provider'),
        fileMerge: require('enb/techs/file-merge'),

        // optimization
        borschik: require('enb-borschik/techs/borschik'),

        // css
        cssStylus: require('enb-stylus/techs/css-stylus'),
        cssAutoprefixer: require('enb-autoprefixer/techs/css-autoprefixer'),

        // js
        browserJs: require('enb-diverse-js/techs/browser-js'),
        prependYm: require('enb-modules/techs/prepend-modules'),

        // bemtree
        // bemtree: require('enb-bemxjst/techs/bemtree-old'),

        // bh
        bh: require('enb-bh/techs/bh-server'),
        bhClient: require('enb-bh/techs/bh-client'),
        htmlFromBemjson: require('enb-bh/techs/html-from-bemjson')
    },
    enbBemTechs = require('enb-bem-techs'),
    levels = [
        { path: 'libs/bem-core/common.blocks', check: false },
        { path: 'libs/bem-core/desktop.blocks', check: false },
        { path: 'libs/bem-components/common.blocks', check: false },
        { path: 'libs/bem-components/desktop.blocks', check: false },
        { path: 'libs/bem-components/design/common.blocks', check: false },
        { path: 'libs/bem-components/design/desktop.blocks', check: false },
        'common.blocks',
        'desktop.blocks'
    ];

module.exports = function(config) {
    var isProd = process.env.YENV === 'production';

    config.nodes('*.bundles/*', function(nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, { levels: levels }],
            [techs.fileProvider, { target: '?.bemjson.js' }],
            [enbBemTechs.bemjsonToBemdecl],
            [enbBemTechs.deps],
            [enbBemTechs.files],

            // css
            [techs.cssStylus, { target: '?.noprefix.css' }],
            [techs.cssAutoprefixer, {
                sourceTarget: '?.noprefix.css',
                destTarget: '?.css',
                browserSupport: ['last 2 versions', 'ie 10', 'opera 12.1']
            }],

            // bemtree
            // [techs.bemtree, { devMode: process.env.BEMTREE_ENV === 'development' }],

            // bh
            [techs.bh, {
                jsAttrName: 'data-bem',
                jsAttrScheme: 'json',
                mimic: 'BEMHTML'
            }],
            [techs.htmlFromBemjson],

            // client bh
            [enbBemTechs.depsByTechToBemdecl, {
                target: '?.bh.bemdecl.js',
                sourceTech: 'js',
                destTech: 'bh'
            }],
            [enbBemTechs.deps, {
                target: '?.bh.deps.js',
                bemdeclFile: '?.bh.bemdecl.js'
            }],
            [enbBemTechs.files, {
                depsFile: '?.bh.deps.js',
                filesTarget: '?.bh.files',
                dirsTarget: '?.bh.dirs'
            }],
            [techs.bhClient, {
                target: '?.browser.bh.js',
                filesTarget: '?.bh.files',
                jsAttrName: 'data-bem',
                jsAttrScheme: 'json',
                mimic: 'BEMHTML'
            }],

            // js
            [techs.browserJs],
            [techs.fileMerge, {
                target: '?.pre.js',
                sources: ['?.browser.bh.js', '?.browser.js']
            }],
            [techs.prependYm, { source: '?.pre.js' }],

            // borschik
            [techs.borschik, { sourceTarget: '?.js', destTarget: '_?.js', freeze: true, minify: isProd }],
            [techs.borschik, { sourceTarget: '?.css', destTarget: '_?.css', tech: 'cleancss', freeze: true, minify: isProd }]
        ]);

        nodeConfig.addTargets([/* '?.bemtree.js', */ '?.html', '_?.css', '_?.js']);
    });
};
