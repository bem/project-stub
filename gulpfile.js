var gulp = require('gulp');
var gbem = require('./gulp-bem');
var gconcat = require('gulp-concat');
var gmerge = require('gulp-merge');
var bemhtml = require('./gulp-bem/bemhtml');
var stylus = require('gulp-stylus');
var postcss = require('gulp-postcss');
var postcssUrl = require('postcss-url');
var path = require('path');
var through = require('through2');

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

var bemConfig = {
    levelsConfig: levelsConfig,
    levels: Object.keys(levelsConfig),
};

// building one bundle with waiting for completing all substreams
gulp.task('build-the-rest', function () {
    var bemProject = new gbem(bemConfig);

    return bemProject.init()
        .then(function() {
            var res = [];
            var bem = bemProject.bundle({
                name: 'index',
                path: 'desktop.bundles/index',
                decl: 'desktop.bundles/index/index.bemjson.js',
//                levels: Object.levels
            });

            res.push(gmerge(
                gulp.src('node_modules/ym/modules.js'),
                bem.src({tech: 'js', extensions: ['js', 'vanilla.js', 'browser.js']}))
                    .pipe(gconcat(bem.name('js'))));

            res.push(bem.bemdecl());

            res.push(bem.src({tech: 'styl', extensions: ['css', 'styl']})
                .pipe(stylus())
                .pipe(postcss([
                    postcssUrl({ url: 'inline' })
                ]))
                .pipe(gconcat(bem.name('css'))));

            var template = bem.src({tech: 'bemhtml', extensions: ['bemhtml.js', 'bemhtml']})
                .pipe(through.obj(function(file, enc, cb) {
                    if (path.basename(file.path) === 'i-bem.bemhtml') {
                        return cb(null);
                    }
                    cb(null, file);
                }))
                //.pipe(bemxjstCompile) // for 1.x
                .pipe(gconcat(bem.name('bemhtml.js')))
                .pipe(bemhtml());

            res.push(template);
            // res.push(bem.html(template, bem.bemjson()));

            return gmerge.apply(null, res)
                .pipe(gulp.dest('build/desktop.bundles/index'));
        });
});

gulp.task('build', function() {
    var bemjson = require('./desktop.bundles/index/index.bemjson.js');
    var bemhtml = require('./build/desktop.bundles/index/index.bemhtml.js');

    require('fs').writeFileSync(
        './build/desktop.bundles/index/index.html',
        bemhtml.apply(bemjson).replace(/\.min\./g, '.'), {encoding: 'utf-8'});

    return Promise.resolve();
});

// .pipe(through.obj(function(file, enc, cb) {
//     console.log(file.path);
//     cb(null, file);
// }))

// gulp.task('default', ['build']);
