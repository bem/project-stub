var tech = {
    // essential
    levels: require('enb-bem-techs/techs/levels'),
    fileProvider: require('enb/techs/file-provider'),
    fileCopy: require('enb/techs/file-copy'),
    bemjsonToBemdecl: require('enb-bem-techs/techs/bemjson-to-bemdecl'),
    deps: require('enb-bem-techs/techs/deps-old'),
    files: require('enb-bem-techs/techs/files'),
    depsByTechToBemdecl: require('enb-bem-techs/techs/deps-by-tech-to-bemdecl'),
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

    // bemhtml
    bemhtml: require('enb-bemxjst/techs/bemhtml-old'),
    htmlFromBemjson: require('enb-bemxjst/techs/html-from-bemjson')
};

module.exports = function(config) {
    var isProd = process.env.YENV === 'production';

    config.nodes('*.bundles/*', function(nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [tech.levels, { levels: getLevels(config) }],
            [tech.fileProvider, { target: '?.bemjson.js' }],
            [tech.bemjsonToBemdecl],
            [tech.deps],
            [tech.files],

            // css
            [tech.cssStylus, { target: '?.noprefix.css' }],
            [tech.cssAutoprefixer, {
                sourceTarget: '?.noprefix.css',
                destTarget: '?.css',
                browserSupport: getBrowsers()
            }],

            // bemtree
            // [tech.bemtree, { devMode: process.env.BEMTREE_ENV === 'development' }],

            // bemhtml
            [tech.bemhtml, { devMode: process.env.BEMHTML_ENV === 'development' }],
            [tech.htmlFromBemjson],

            // client bemhtml
            [tech.depsByTechToBemdecl, {
                target: '?.bemhtml.bemdecl.js',
                sourceTech: 'js',
                destTech: 'bemhtml'
            }],
            [tech.deps, {
                target: '?.bemhtml.deps.js',
                bemdeclFile: '?.bemhtml.bemdecl.js'
            }],
            [tech.files, {
                depsFile: '?.bemhtml.deps.js',
                filesTarget: '?.bemhtml.files',
                dirsTarget: '?.bemhtml.dirs'
            }],
            [tech.bemhtml, {
                target: '?.browser.bemhtml.js',
                filesTarget: '?.bemhtml.files',
                devMode: process.env.BEMHTML_ENV === 'development'
            }],

            // js
            [tech.browserJs],
            [tech.fileMerge, {
                target: '?.pre.js',
                sources: ['?.browser.bemhtml.js', '?.browser.js']
            }],
            [tech.prependYm, { source: '?.pre.js' }],

            // borschik
            [tech.borschik, { sourceTarget: '?.js', destTarget: '_?.js', freeze: true, minify: isProd }],
            [tech.borschik, { sourceTarget: '?.css', destTarget: '_?.css', tech: 'cleancss', freeze: true, minify: isProd }]
        ]);

        nodeConfig.addTargets([/* '?.bemtree.js', */ '?.html', '_?.css', '_?.js']);
    });
};

function getLevels(config) {
    return [
            { path: 'libs/bem-core/common.blocks', check: false },
            { path: 'libs/bem-core/desktop.blocks', check: false },
            { path: 'libs/bem-components/common.blocks', check: false },
            { path: 'libs/bem-components/desktop.blocks', check: false },
            { path: 'libs/bem-components/design/common.blocks', check: false },
            { path: 'libs/bem-components/design/desktop.blocks', check: false },
            'common.blocks',
            'desktop.blocks'
        ]
        .map(function(level) {
            return config.resolvePath(level);
        });
}

function getBrowsers() {
    return [
        'last 2 versions',
        'ie 10',
        'opera 12.16'
    ];
}
