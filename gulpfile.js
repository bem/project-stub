var gulp = require('gulp');
var gbem = require('./gulp-bem');
var gconcat = require('gulp-concat');
var gmerge = require('gulp-merge');
var bemhtml = require('./gulp-bem/bemhtml');
var stylus = require('gulp-stylus');
var postcss = require('gulp-postcss');
var postcssUrl = require('postcss-url');
var path = require('path');

var levelsConfig = {
    'libs/bem-core/common.blocks': {scheme: 'nested'},
    'libs/bem-core/desktop.blocks': {scheme: 'nested'},
    'libs/bem-components/common.blocks': {scheme: 'nested'},
    'libs/bem-components/desktop.blocks': {scheme: 'nested'},
    'libs/bem-components/design/common.blocks': {scheme: 'nested'},
    'libs/bem-components/design/desktop.blocks': {scheme: 'nested'},
    'common.blocks': {scheme: 'nested'},
    'desktop.blocks': {scheme: 'nested'}
};

var levels = [
    'libs/bem-core/common.blocks',
    'libs/bem-core/desktop.blocks',
    'libs/bem-components/common.blocks',
    'libs/bem-components/desktop.blocks',
    'libs/bem-components/design/common.blocks',
    'libs/bem-components/design/desktop.blocks',
    'common.blocks',
    'desktop.blocks'
];

var bemConfig = {
    levels: levels,
    levelsConfig: levelsConfig
};

// building one bundle with waiting for completing all substreams
gulp.task('build', function () {
    var name = 'index';
    var bundlePath = tech => `desktop.bundles/${name}/${tech? `${name}.${tech}` : ''}`;
    var bundleFile = tech => ({path: path.resolve(bundlePath(tech))});
    var opts = {
        decl: bundlePath('bemjson.js'),
        levels: levels
    };

    var bem = new gbem(bemConfig);

    return bem.init()
        .then(function() {
            var res = [];

            res.push(bem.src(Object.assign({}, opts, {tech: 'js'}))
                .pipe(gconcat(bundleFile('js'))));

            res.push(bem.src(Object.assign({}, opts, {tech: 'styl', extensions: ['styl']}))
                .pipe(stylus())
                .pipe(postcss([
                    postcssUrl({ url: 'inline' })
                ]))
                .pipe(gconcat(bundleFile('css')))
            );

            res.push(bem.src(Object.assign({}, opts, {tech: 'bemhtml.js', extensions: ['bemhtml.js', 'bemhtml']}))
                .pipe(gconcat(bundleFile('bemhtml.js')))
                .pipe(bemhtml()));

            return gmerge.apply(null, res)
                .pipe(gulp.dest('build'));
        });
});

// .pipe(through.obj(function(file, enc, cb) {
//     console.log(file.path);
//     cb(null, file);
// }))

// gulp.task('default', ['build']);
