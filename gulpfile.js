var Config = require('bem-config'),
    bem = require('@bem/gulp'),
    gulp = require('gulp'),
    path = require('path'),
    concat = require('gulp-concat'),
    stylus = require('gulp-stylus'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    postcssUrl = require('postcss-url'),
    merge = require('merge2'),
    clone = require('gulp-clone'),
    rename = require('gulp-rename'),
    through = require('through2');

// bemhtml
var bemxjst = require('gulp-bem-xjst');

var conf = new Config(),
    project = bem({ bemconfig: conf.levels });

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
	.pipe(concat(bundle.name() + '.css'))
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
	.pipe(concat(bundle.name() + '.js'))
	.pipe(gulp.dest(bundle.path()));
});

gulp.task('html', function() {
    var tmpl = bundle.src({ tech: 'bemhtml.js', extensions: ['.bemhtml.js', '.bemhtml'] })
        .pipe(through.obj(function(file, enc, cb) {
            if (path.basename(file.path) === 'i-bem.bemhtml') {
                return cb(null);
            }
            cb(null, file);
        }))
        .pipe(concat(bundle.name()))
        .pipe(bemxjst.bemhtml());

        return bundle.bemjson()
            .pipe(bemxjst.toHtml(tmpl.pipe(clone())))
            .pipe(gulp.dest(bundle.path()));
});

gulp.task('default', gulp.parallel('css', 'js', 'html'));
