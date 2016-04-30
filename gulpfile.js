'use strict';

const config = require('bem-config')();
const bem = require('@bem/gulp');
const gulp = require('gulp');
const path = require('path');
const concat = require('gulp-concat');
const clone = require('gulp-clone');
const debug = require('gulp-debug');
const merge = require('merge2');

// css
const stylus = require('gulp-stylus');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const postcssUrl = require('postcss-url');
const csso = require('gulp-csso');

// js
const uglify = require('gulp-uglify');

const thru = require('through2');

// bemhtml
const bemxjst = require('gulp-bem-xjst');

// uglification flag
const isProd = process.env.YENV === 'production';

const project = bem({ bemconfig: config.getSync().levels });
const bundle = project.bundle({
    path: 'desktop.bundles/index',
    decl: 'index.bemjson.js'
});

function skip() {
    return thru.obj();
}

gulp.task('css', () =>
    bundle.src({
        tech: 'css',
        extensions: ['.css', '.styl']
    })
    .pipe(stylus())
    .pipe(postcss([
        autoprefixer({
            browsers: ['ie >= 10', 'last 2 versions', 'opera 12.1', '> 2%']
        }),
        postcssUrl({
            url: (url, decl, from) =>
                path.relative(
                    path.resolve(process.cwd(), bundle.path()),
                    path.resolve(from, url))
        })
    ]))
    .pipe(concat(bundle.name() + '.min.css'))
    .pipe(isProd ? csso() : skip())
    .pipe(gulp.dest(bundle.path()))
    .pipe(debug())
);

gulp.task('js', () =>
    merge(
        gulp.src(require.resolve('ym')),
        bundle.src({
            tech: 'js',
            extensions: ['.js', '.vanilla.js', '.browser.js']
        })
    )
    .pipe(concat(bundle.name() + '.min.js'))
    .pipe(isProd ? uglify() : skip())
    .pipe(gulp.dest(bundle.path()))
    .pipe(debug())
);

gulp.task('html', () => {
    let tmpl = bundle.src({ tech: 'bemhtml.js', extensions: ['.bemhtml.js', '.bemhtml'] })
            .pipe(thru.obj(function(file, enc, cb) {
                if (path.basename(file.path) === 'i-bem.bemhtml') return cb(null);
                cb(null, file);
            }))
            .pipe(concat(bundle.name()))
            .pipe(bemxjst.bemhtml()),

        html = bundle.bemjson().pipe(bemxjst.toHtml(tmpl.pipe(clone())));

    return merge(
            html,
            tmpl.pipe(clone())
        )
        .pipe(gulp.dest(bundle.path()))
        .pipe(debug());
});

gulp.task('default', gulp.parallel('css', 'js', 'html'));
