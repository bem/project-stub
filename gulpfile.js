const Builder = require('gulp-bem-bundle-builder');
const bundler = require('gulp-bem-bundler-fs');
const gulp = require('gulp');
const path = require('path');
const postcss = require('gulp-postcss');
const debug = require('gulp-debug');
const csso = require('gulp-csso');
const filter = require('through2-filter').obj;
const merge = require('merge2');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const bemhtml = require('gulp-bem-xjst').bemhtml;
const toHtml = require('gulp-bem-xjst').toHtml;

const builder = Builder({
    levels: [
        'node_modules/bem-core/common.blocks',
        'node_modules/bem-core/desktop.blocks',
        'node_modules/bem-components/common.blocks',
        'node_modules/bem-components/desktop.blocks',
        'node_modules/bem-components/design/common.blocks',
        'node_modules/bem-components/design/desktop.blocks',
        'common.blocks',
        'desktop.blocks'
    ],
    techMap: {
        bemhtml: ['bemhtml.js'],
        js: ['vanilla.js', 'browser.js', 'js'],
        css: ['post.css', 'css']
    }
});

gulp.task('build', () => {
    return bundler('*.bundles/*')
        .pipe(builder({
            // cssdeps: bundle => bundle.src('css', {deps: true})
            //     .pipe(concat(bundle.name + '.css.deps.js')),
            // jsdeps: bundle => bundle.src('js', {deps: true})
            //     .pipe(concat(bundle.name + '.js.deps.js')),
            // bemhtmldeps: bundle => bundle.src('bemhtml', {deps: true})
            //     .pipe(concat(bundle.name + '.bemhtml.deps.js')),
            css: bundle =>
                bundle.src('css')
                    .pipe(require('gulp-one-of')())
                    .pipe(postcss([
                        require('postcss-import')(),
                        require('postcss-each'),
                        require('postcss-for'),
                        require('postcss-simple-vars')(),
                        require('postcss-calc')(),
                        require('postcss-nested'),
                        require('rebem-css'),
                        require('postcss-url')({ url: 'inline' }),
                        require('autoprefixer')(),
                        require('postcss-reporter')()
                    ]))
                    .pipe(concat(bundle.name + '.min.css'))
                    .pipe(csso()),
            js: bundle =>
                merge(
                    gulp.src(require.resolve('ym')),
                    bundle.src('js').pipe(filter(f => ~['vanilla.js', 'browser.js', 'js'].indexOf(f.tech))),
                    bundle.src('js').pipe(filter(file => file.tech === 'bemhtml.js'))
                        .pipe(concat('browser.bemhtml.js')).pipe(bemhtml())
                )
                    .pipe(uglify())
                    .pipe(concat(bundle.name + '.min.js')),
            tmpls: bundle =>
                bundle.src('bemhtml')
                    .pipe(concat('any.bemhtml.js'))
                    .pipe(bemhtml({ elemJsInstances: true }))
                    .pipe(concat(bundle.name + '.bemhtml.js')),
            html: bundle => {
                const bemhtmlApply = () => toHtml(bundle.target('tmpls'));
                return gulp.src(bundle.dirname + '/*.bemjson.js')
                    .pipe(bemhtmlApply());
            }
       }))
       .on('error', console.error)
       .pipe(debug())
       .pipe(gulp.dest(file => path.dirname(file.path)));
});

gulp.task('default', gulp.series('build'));
