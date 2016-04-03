require('babel-polyfill');

var // Config = require('bem-config'),
    // bem = require('@bem/gulp'),
    gulp = require('gulp'),
    fs = require('fs'),
    path = require('path'),
    concat = require('gulp-concat'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    postcssUrl = require('postcss-url'),
    merge = require('merge2'),
    clone = require('gulp-clone'),
    through = require('through2'),
    bemxjst = require('gulp-bem-xjst'),

    piece = require('gulp-piece'),

    // css
    stylus = require('gulp-stylus'),
    csso = require('gulp-csso'),

    // js
    uglify = require('gulp-uglify'),

    File = require('vinyl'),
    src = require('gulp-bem-src'),
    builder = require('gulp-bem-bundle-builder');

var levelMap = {
    'libs/bem-core/common.blocks': { scheme: 'nested' },
    'libs/bem-core/desktop.blocks': { scheme: 'nested' },
    'libs/bem-components/common.blocks': { scheme: 'nested' },
    'libs/bem-components/desktop.blocks': { scheme: 'nested' },
    'libs/bem-components/design/common.blocks': { scheme: 'nested' },
    'libs/bem-components/design/desktop.blocks': { scheme: 'nested' },
    'common.blocks': { scheme: 'nested' },
    'desktop.blocks': { scheme: 'nested' }
};

var transforms = bundle => {
    const cssTransform = piece(
        stylus(),
        postcss([
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
        ]),
        csso());

    const bemxjst = bundle.src({tech: 'bemhtml'})
        .pipe(concat(bundle.name() + '.bemhtml.js'))
        .pipe(bemxjst.bemhtml());

    return {
        css: {
            extensions: ['.css', '.styl'],
            transform: cssTransform
        },
        html: bundle.bemjson().pipe(bemxjst.toHtml(bemxjstTransform))
    };
});

gulp.task('all', function() {
    return bundler('*.bundles/*')
        .pipe(builder(transforms, { config: levelMap }))
        .pipe(gulp.dest('./build'));
});

// gulp.task('html', function() {
//     var tmpl = bundle.src({ tech: 'bemhtml.js', extensions: ['.bemhtml.js', '.bemhtml'] })
//         .pipe(through.obj(function(file, enc, cb) {
//             if (path.basename(file.path) === 'i-bem.bemhtml') {
//                 return cb(null);
//             }
//             cb(null, file);
//         }))
//         .pipe(concat(bundle.name() + '.bemhtml.js'))
//         .pipe(bemxjst.bemhtml());

//         return bundle.bemjson()
//             .pipe(bemxjst.toHtml(tmpl.pipe(clone())))
//             .pipe(concat(bundle.name() + '.html'))
//             .pipe(gulp.dest(bundle.path()));
// });

// gulp.task('default', gulp.parallel('css', 'js', 'html'));

var Readable = require('stream').Readable;
function bundler(obj) {
    obj = obj || {};
    var path = obj.path;
    var levels = obj.levels;

    // var glob('*.bundles/*');
    var st = new Readable({ objectMode: true });
    st.push({
        bemjson: new File({
            path: 'desktop.bundles/index/index.bemjson.js',
            contents: new Buffer(fs.readFileSync('desktop.bundles/index/index.bemjson.js', 'utf-8'))
        }),
        levels: Object.keys(levelMap)
    });
    st.push(null);

    return st;
}
