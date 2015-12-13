var bemconfig = {
    'libs/bem-core/common.blocks': {scheme: 'nested'},
    'libs/bem-core/desktop.blocks': {scheme: 'nested'},
    'libs/bem-components/common.blocks': {scheme: 'nested'},
    'libs/bem-components/desktop.blocks': {scheme: 'nested'},
    'libs/bem-components/design/common.blocks': {scheme: 'nested'},
    'libs/bem-components/design/desktop.blocks': {scheme: 'nested'},
    'common.blocks': {scheme: 'nested'},
    'desktop.blocks': {scheme: 'nested'}
};

/////////

var path = require('path');
var gulp = require('gulp');
var project = require('./gulp-bem')({
    bemconfig: bemconfig
});
var concat = require('gulp-concat');
var merge = require('gulp-merge');
var bemhtml = require('./gulp-bem/bemhtml');
var stylus = require('gulp-stylus');
var postcss = require('gulp-postcss');
var postcssUrl = require('postcss-url');
var through = require('through2');

// building one bundle with waiting for completing all substreams
gulp.task('jscss', function () {
    var bundle = project.bundle({
        path: 'desktop.bundles/index',
        decl: 'index.bemjson.js',
        // levels: []
    });

    return merge(
        merge(
            gulp.src('node_modules/ym/modules.js'),
            bundle.src({tech: 'js', extensions: ['.js', '.vanilla.js', '.browser.js']})
        )
        .pipe(concat(`${bundle.name()}.js`)),

        bundle.src({tech: 'css', extensions: ['.css', '.styl']})
            .pipe(stylus())
            .pipe(postcss([
                postcssUrl({ url: 'inline' })
            ]))
            .pipe(concat(`${bundle.name()}.css`)),

        bundle.src({tech: 'bemhtml.js', extensions: ['.bemhtml.js', '.bemhtml']})
            .pipe(through.obj(function(file, enc, cb) {
                if (path.basename(file.path) === 'i-bem.bemhtml') {
                    return cb(null);
                }
                cb(null, file);
            }))
            //.pipe(bundlexjstCompile) // for 1.x
            .pipe(concat(`${bundle.name()}.bemhtml.js`))
            .pipe(bemhtml())
    )
    .pipe(gulp.dest('build/desktop.bundles/index'));
});

gulp.task('html', function() {
    var bemjson = require('./desktop.bundles/index/index.bemjson.js');
    var bemhtml = require('./build/desktop.bundles/index/index.bemhtml.js');

    require('fs').writeFileSync(
        './build/desktop.bundles/index/index.html',
        bemhtml.apply(bemjson).replace(/\.min\./g, '.'), {encoding: 'utf-8'});

    return Promise.resolve();
});

gulp.task('build', gulp.series('jscss', 'html'));

gulp.task('default', gulp.series('build'));
