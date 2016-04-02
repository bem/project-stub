var Config = require('bem-config'),
    bem = require('@bem/gulp'),
    gulp = require('gulp'),
    path = require('path'),
    concat = require('gulp-concat'),
    stylus = require('gulp-stylus'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    postcssUrl = require('postcss-url'),
    csso = require('gulp-csso'),
    uglify = require('gulp-uglify'),
    merge = require('merge2');

// bh
var bhEngine = require('@bem/gulp-bh')({
    jsAttrName: 'data-bem',
    jsAttrScheme: 'json'
});

var conf = new Config(),
    project = bem({ bemconfig: conf.merged.levels });

var bundle = project.bundle({
    path: 'desktop.bundles/index',
    decl: 'index.bemjson.js'
});

gulp.task('css', function() {
    return bundle.src({
        tech: 'css',
        extensions: ['.css', '.styl']
    })
    .pipe(stylus())
    .pipe(postcss([
        autoprefixer({
            browsers: ['ie >= 10', 'last 2 versions', 'opera 12.1', '> 2%']
        }),
        postcssUrl({
            url: function(url, decl, from) {
                return path.relative(
                    path.resolve(process.cwd(), bundle.path()),
                    path.resolve(from, url)
                );
            }
        })
    ]))
    .pipe(csso())
    .pipe(concat(bundle.name() + '.min.css'))
    .pipe(gulp.dest(bundle.path()));
});

gulp.task('js', function() {
    return merge(
        gulp.src(require.resolve('ym')),
        bundle.src({
            tech: 'js',
            extensions: ['.js', '.vanilla.js', '.browser.js']
        })
    )
    .pipe(uglify())
    .pipe(concat(bundle.name() + '.min.js'))
    .pipe(gulp.dest(bundle.path()));
});

gulp.task('bh', function() {
    return bundle.src({
        tech: 'bh.js',
        extensions: ['.bh.js']
    })
    .pipe(bhEngine.match());
});

gulp.task('html', gulp.series('bh', function apply() {
    return bundle.bemjson()
        .pipe(bhEngine.apply(bundle.name() + '.html'))
        .pipe(gulp.dest(bundle.path()));
}));

gulp.task('default', gulp.parallel('css', 'js', 'html'));
