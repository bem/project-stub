var techs = {
        // essential
        fileProvider: require('enb/techs/file-provider'),
        fileMerge: require('enb/techs/file-merge'),

        i18n: require('enb-bem-i18n/techs/i18n'),
        keysets: require('enb-bem-i18n/techs/keysets'),

        // optimization
        borschik: require('enb-borschik/techs/borschik'),

        // css
        stylus: require('enb-stylus/techs/stylus'),

        // js
        browserJs: require('enb-js/techs/browser-js'),

        // bemtree
        // bemtree: require('enb-bemxjst/techs/bemtree'),

        // bemhtml
        bemhtml: require('enb-bemxjst-i18n/techs/bemhtml-i18n'),
        bemjsonToHtml: require('enb-bemxjst/techs/bemjson-to-html')
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

    config.setLanguages(['en', 'ru']);

    config.nodes('*.bundles/*', function(nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, { levels: levels }],
            [techs.fileProvider, { target: '?.{lang}.bemjson.js' }],
            [enbBemTechs.bemjsonToBemdecl, { source: '?.{lang}.bemjson.js', target: '?.{lang}.bemdecl.js' }],
            [enbBemTechs.deps, { target: '?.{lang}.deps.js', bemdeclFile: '?.{lang}.bemdecl.js' }],
            [enbBemTechs.files, { filesTarget: '?.{lang}.files', dirsTarget: '?.{lang}.dirs', depsFile: '?.{lang}.deps.js' }],

            // css
            [techs.stylus, {
                filesTarget: '?.{lang}.files',
                target: '?.{lang}.css',
                autoprefixer: {
                    browsers: ['ie >= 10', 'last 2 versions', 'opera 12.1', '> 2%']
                }
            }],


            // keyset files for each language
            [techs.keysets, { lang: '{lang}', filesTarget: '?.{lang}.files', dirsTarget: '?.{lang}.dirs' }],

            // i18n files for each language
            [techs.i18n, { lang: '{lang}' }],

            // bemtree
            // [techs.bemtree, { devMode: process.env.BEMTREE_ENV === 'development' }],

            // bemhtml
            [techs.bemhtml, {
                filesTarget: '?.{lang}.files',
                lang: '{lang}',
                devMode: process.env.BEMHTML_ENV === 'development'
            }],

            // html
            [techs.bemjsonToHtml, {
                bemjsonFile: '?.{lang}.bemjson.js',
                bemhtmlFile: '?.bemhtml.{lang}.js',
                target: '?.{lang}.html'
            }],

            // client bemhtml
            [enbBemTechs.depsByTechToBemdecl, {
                filesTarget: '?.{lang}.files',
                target: '?.{lang}.bemhtml.bemdecl.js',
                sourceTech: 'js',
                destTech: 'bemhtml'
            }],
            [enbBemTechs.deps, {
                target: '?.{lang}.bemhtml.deps.js',
                bemdeclFile: '?.{lang}.bemhtml.bemdecl.js'
            }],
            [enbBemTechs.files, {
                depsFile: '?.{lang}.bemhtml.deps.js',
                filesTarget: '?.{lang}.bemhtml.files',
                dirsTarget: '?.{lang}.bemhtml.dirs'
            }],
            [techs.bemhtml, {
                lang: '{lang}',
                target: '?.browser.{lang}.bemhtml.js',
                filesTarget: '?.{lang}.bemhtml.files',
                devMode: process.env.BEMHTML_ENV === 'development'
            }],

            // js
            [techs.browserJs, { includeYM: true, filesTarget: '?.{lang}.files', target: '?.{lang}.browser.js' }],
            [techs.fileMerge, {
                target: '?.{lang}.js',
                sources: ['?.{lang}.browser.js', '?.lang.{lang}.js', '?.browser.{lang}.bemhtml.js'],
                lang: '{lang}'
            }],

            // borschik
            [techs.borschik, { source: '?.{lang}.js', target: '?.{lang}.min.js', minify: isProd }],
            [techs.borschik, { source: '?.{lang}.css', target: '?.{lang}.min.css', tech: 'cleancss', minify: isProd }]
        ]);

        nodeConfig.addTargets([/* '?.bemtree.js', */ '?.{lang}.html', '?.{lang}.min.css', '?.{lang}.min.js']);
    });
};
