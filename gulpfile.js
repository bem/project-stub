var gulp = require('gulp');
var gbem = require('./gulp-bem');
var gconcat = require('gulp-concat');
var gmerge = require('gulp-merge');

var bem = new gbem({
    levels: {
        'lib/bem-core/common.blocks': {scheme: 'nested'},
        'lib/bem-core/desktop.blocks': {scheme: 'nested'},
        'lib/bem-components/common.blocks': {scheme: 'nested'},
        'lib/bem-components/desktop.blocks': {scheme: 'nested'},
        'common.blocks': {scheme: 'nested'},
        'desktop.blocks': {scheme: 'nested'}
    }
});

var levels = [
    'lib/bem-core/common.blocks',
    'lib/bem-core/desktop.blocks',
    'lib/bem-components/common.blocks',
    'lib/bem-components/desktop.blocks',
    'common.blocks',
    'desktop.blocks',
];

// building one bundle with waiting for completing all substreams
gulp.task('build', function () {
    var res = [];
    var name = 'index';
    var bundlePath = tech => `desktop.bundles/index${tech? `/${name}.${tech}` : ''}`;
    var opts = {
        decl: bundlePath('bemdecl.js'),
        levels: levels
    };

    res.push(bem.src(Object.assign({}, opts, {tech: 'css'}))
        .pipe(gconcat(`${name}.css`)));

    res.push(bem.src(Object.assign({}, opts, {tech: 'js'}))
        .pipe(gconcat(`${name}.js`)));

    res.push(bem.src(Object.assign({}, opts, {tech: 'bemhtml.js'}))
        .pipe(gconcat(`${name}.bemhtml.js`)))
//        .pipe(apply(gulp.src(bundlePath('bemjson.js'))))
//        .pipe(gRename(`${name}.html`)));

    return gmerge.apply(null, res)
        .pipe(gulp.dest(bundlePath()));
});

// gulp.task('default', ['build']);
