var techs = {
        // essential
        fileProvider: require('enb/techs/file-provider'),
        fileMerge: require('enb/techs/file-merge'),

        i18n: require('enb-bem-i18n/techs/i18n'),
        keysets: require('enb-bem-i18n/techs/keysets'),

        // optimization
        borschik: require('enb-borschik/techs/borschik'),

        // css
        postcss: require('enb-postcss/techs/enb-postcss'),
        postcssPlugins: [
            require('postcss-import')(),
            require('postcss-each'),
            require('postcss-for'),
            require('postcss-simple-vars')(),
            require('postcss-calc')(),
            require('postcss-nested'),
            require('rebem-css'),
            require('postcss-url')({ url: 'inline' }),
            require('autoprefixer')(),
            require('postcss-reporter')()
        ],

        // js
        browserJs: require('enb-js/techs/browser-js'),
        prependYm: require('enb-modules/techs/prepend-modules'),

        // bemtree
        // bemtree: require('enb-bemxjst/techs/bemtree'),

        // bemhtml
        bemhtml: require('enb-bemxjst-i18n/techs/bemhtml-i18n'),
        bemjsonToHtml: require('enb-bemxjst/techs/bemjson-to-html')
    },
    enbBemTechs = require('enb-bem-techs'),
    levels = [
        { path: 'node_modules/bem-core/common.blocks', check: false },
        { path: 'node_modules/bem-core/desktop.blocks', check: false },
        { path: 'node_modules/bem-components/common.blocks', check: false },
        { path: 'node_modules/bem-components/desktop.blocks', check: false },
        { path: 'node_modules/bem-components/design/common.blocks', check: false },
        { path: 'node_modules/bem-components/design/desktop.blocks', check: false },
        'common.blocks',
        'desktop.blocks'
    ];

module.exports = function(config) {
    var isProd = process.env.YENV === 'production';

    config.setLanguages(['en', 'ru']);

    config.nodes('*.bundles/*', function(nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, { levels: levels }],
            [techs.fileProvider, { target: '?.bemjson.js' }],
            [enbBemTechs.bemjsonToBemdecl],
            [enbBemTechs.deps],
            [enbBemTechs.files],

            // css
            [techs.postcss, {
                target: '?.css',
                oneOfSourceSuffixes: ['post.css', 'css'],
                plugins: techs.postcssPlugins
            }],

            // keyset files for each language
            [techs.keysets, { lang: '{lang}' }],

            // i18n files for each language
            [techs.i18n, { lang: '{lang}' }],

            // bemtree
            // [techs.bemtree, { sourceSuffixes: ['bemtree', 'bemtree.js'] }],

            // bemhtml
            [techs.bemhtml, {
                sourceSuffixes: ['bemhtml', 'bemhtml.js'],
                forceBaseTemplates: true,
                engineOptions : { elemJsInstances : true },
                lang: '{lang}',
            }],

            // html
            [techs.bemjsonToHtml, {
                bemhtmlFile: '?.bemhtml.{lang}.js',
                target: '?.{lang}.html'
            }],

            // client bemhtml
            [enbBemTechs.depsByTechToBemdecl, {
                target: '?.bemhtml.bemdecl.js',
                sourceTech: 'js',
                destTech: 'bemhtml'
            }],
            [enbBemTechs.deps, {
                target: '?.bemhtml.deps.js',
                bemdeclFile: '?.bemhtml.bemdecl.js'
            }],
            [enbBemTechs.files, {
                depsFile: '?.bemhtml.deps.js',
                filesTarget: '?.bemhtml.files',
                dirsTarget: '?.bemhtml.dirs'
            }],
            [techs.bemhtml, {
                lang: '{lang}',
                target: '?.browser.{lang}.bemhtml.js',
                filesTarget: '?.bemhtml.files',
                sourceSuffixes: ['bemhtml', 'bemhtml.js'],
                engineOptions : { elemJsInstances : true }
            }],

            // js
            [techs.browserJs],
            [techs.fileMerge, {
                target: '?.pre.{lang}.js',
                sources: ['?.lang.{lang}.js', '?.browser.{lang}.bemhtml.js', '?.browser.js'],
                lang: '{lang}'
            }],
            [techs.prependYm, {
                source: '?.pre.{lang}.js',
                target: '?.{lang}.js'
            }],

            // borschik
            [techs.borschik, { source: '?.{lang}.js', target: '?.{lang}.min.js', minify: isProd }],
            [techs.borschik, { source: '?.css', target: '?.min.css', minify: isProd }]
        ]);

        nodeConfig.addTargets([/* '?.bemtree.js', */ '?.{lang}.html', '?.min.css', '?.{lang}.min.js']);
    });
};
