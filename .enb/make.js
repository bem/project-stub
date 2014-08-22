var tech = {
    // essential
    levels: require('enb-bem/techs/levels'),
    fileProvider: require('enb/techs/file-provider'),
    fileCopy: require('enb/techs/file-copy'),
    bemdeclFromBemjson: require('enb-bem/techs/bemdecl-from-bemjson'),
    deps: require('enb-bem/techs/deps-old'),
    files: require('enb-bem/techs/files'),
    bemdeclFromDepsByTech: require('enb-bem/techs/bemdecl-from-deps-by-tech'),
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
    config.nodes('*.bundles/*', function(nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [tech.levels, { levels: getLevels(config) }],
            [tech.fileProvider, { target: '?.bemjson.js' }],
            [tech.bemdeclFromBemjson],
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
            // [tech.bemtree, { devMode: process.env.YENV === 'development' }],

            // bemhtml
            [tech.bemhtml, { devMode: process.env.YENV === 'development' }],
            [tech.htmlFromBemjson],

            // client bemhtml
            [tech.bemdeclFromDepsByTech, {
                target: '?.bemhtml.bemdecl.js',
                sourceTech: 'js',
                destTech: 'bemhtml'
            }],
            [tech.deps, {
                target: '?.bemhtml.deps.js',
                sourceDepsFile: '?.bemhtml.bemdecl.js'
            }],
            [tech.files, {
                target: '?.bemhtml.deps.js',
                filesTarget: '?.bemhtml.files',
                dirsTarget: '?.bemhtml.dirs'
            }],
            [tech.bemhtml, {
                target: '?.browser.bemhtml.js',
                filesTarget: '?.bemhtml.files',
                devMode: process.env.YENV === 'development'
            }],

            // js
            [tech.browserJs],
            [tech.fileMerge, {
                target: '?.pre.js',
                sources: ['?.browser.bemhtml.js', '?.browser.js']
            }],
            [tech.prependYm, { source: '?.pre.js' }]
        ]);

        nodeConfig.addTargets([/* '?.bemtree.js', */ '?.html', '_?.css', '_?.js']);

        nodeConfig.mode('development', function() {
            nodeConfig.addTechs([
                [tech.fileCopy, { sourceTarget: '?.js', destTarget: '_?.js' }],
                [tech.fileCopy, { sourceTarget: '?.css', destTarget: '_?.css' }]
            ]);
        });

        nodeConfig.mode('production', function() {
            nodeConfig.addTechs([
                [tech.borschik, { sourceTarget: '?.js', destTarget: '_?.js' }],
                [tech.borschik, { sourceTarget: '?.css', destTarget: '_?.css', tech: 'cleancss' }]
            ]);
        });
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
