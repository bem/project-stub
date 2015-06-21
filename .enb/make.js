var fs = require('fs'),
    path = require('path'),
    crypto = require('crypto'),
    techs = {
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

        // bemhtml
        bemhtml: require('enb-bemxjst/techs/bemhtml-old'),
        htmlFromBemjson: require('enb-bemxjst/techs/html-from-bemjson')
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
    ],
    tmpDirname = path.join(__dirname, 'tmp', 'targets');

module.exports = function(config) {
    var isProd = process.env.YENV === 'production';

    config.nodes('*.bundles/*', function(nodeConfig) {
        var nodeDirname = nodeConfig.getNodePath();

        function tmp(target) {
            var shasum = crypto.createHash('sha1'),
                filename = path.join(nodeDirname, target),
                hash;

            shasum.update(filename);
            hash = shasum.digest('hex');

            return path.relative(nodeDirname, path.join(tmpDirname, hash));
        }

        fs.existsSync(tmpDirname) || fs.mkdirSync(tmpDirname);

        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, {
                target: tmp('levels'),
                levels: levels
            }],
            [techs.fileProvider, { target: '?.bemjson.js' }],
            [enbBemTechs.bemjsonToBemdecl, {
                target: tmp('bemdecl.js')
            }],
            [enbBemTechs.deps, {
                target: tmp('deps.js'),
                bemdeclFile: tmp('bemdecl.js'),
                levelsTarget: tmp('levels')
            }],
            [enbBemTechs.files, {
                depsFile: tmp('deps.js'),
                levelsTarget: tmp('levels')
            }],

            // css
            [techs.cssStylus, {
                target: tmp('noprefix.css')
            }],
            [techs.cssAutoprefixer, {
                sourceTarget: tmp('noprefix.css'),
                destTarget: tmp('prefix.css'),
                browserSupport: ['last 2 versions', 'ie 10', 'opera 12.16']
            }],

            // bemtree
            // [techs.bemtree, { devMode: process.env.BEMTREE_ENV === 'development' }],

            // bemhtml
            [techs.bemhtml, {
                target: tmp('bemhtml.js'),
                devMode: process.env.BEMHTML_ENV === 'development'
            }],
            [techs.htmlFromBemjson, {
                bemhtmlFile: tmp('bemhtml.js')
            }],

            // client bemhtml
            [enbBemTechs.depsByTechToBemdecl, {
                target: tmp('js-template.bemdecl.js'),
                sourceTech: 'js',
                destTech: 'bemhtml'
            }],
            [enbBemTechs.deps, {
                levelsTarget: tmp('levels'),
                target: tmp('js-template.deps.js'),
                bemdeclFile: tmp('js-template.bemdecl.js')
            }],
            [enbBemTechs.files, {
                levelsTarget: tmp('levels'),
                depsFile: tmp('js-template.deps.js'),
                filesTarget: tmp('js-template.files'),
                dirsTarget: tmp('js-template.dirs')
            }],
            [techs.bemhtml, {
                target: tmp('js-template.js'),
                filesTarget: tmp('js-template.files'),
                devMode: process.env.BEMHTML_ENV === 'development'
            }],

            // js
            [techs.browserJs, {
                target: tmp('source.js')
            }],
            [techs.fileMerge, {
                target: tmp('source+template.js'),
                sources: [tmp('js-template.js'), tmp('source.js')]
            }],
            [techs.prependYm, {
                target: tmp('browser.js'),
                source: tmp('source+template.js')
            }],

            // borschik
            [techs.borschik, { sourceTarget: tmp('browser.js'), destTarget: '?.js', freeze: true, minify: isProd }],
            [techs.borschik, { sourceTarget: tmp('prefix.css'), destTarget: '?.css', tech: 'cleancss', freeze: true, minify: isProd }]
        ]);

        nodeConfig.addTargets([/* '?.bemtree.js', */ '?.html', '?.css', '?.js']);
    });
};
