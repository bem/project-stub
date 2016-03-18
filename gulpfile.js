var bem = require('@bem/gulp');
var gulp = require('gulp');
var path = require('path');
var concat = require('gulp-concat');
var comment = require('gulp-enb-comment');

//css
var stylus = require('gulp-stylus');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var postcssUrl = require('postcss-url');

//js
var merge = require('merge2');

//bh
var bhEngine = require('@bem/gulp-bh')({'jsAttrName': 'data-bem', 'jsAttrScheme': 'json'});


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

var project = bem({
	bemconfig: bemconfig
});

var bundle = project.bundle({
	path: 'desktop.bundles/index2',
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
	.pipe(comment(bundle.path()))
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
		.pipe(comment(bundle.path()))
	)
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

gulp.task('html', gulp.series('bh', function example() {
    return bundle.bemjson()
        .pipe(bhEngine.apply(bundle.name() + '.html'))
        .pipe(gulp.dest(bundle.path()));
}));

gulp.task('default', gulp.parallel('css', 'js', 'html'));
