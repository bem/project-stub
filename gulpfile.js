var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    concatStream = require('concat-stream'),
    lazypipe = require('lazypipe'),
    bemjsonToDecl = require('bemjson-to-decl'),
    through = require('through2'),
    del = require('del'),
    walk = require('bem-walk'),
    bemDeps = require('@bem/deps'),
    toArray = require('stream-to-array'),
    path = require('path'),
    PluginError = gutil.PluginError;

var walkConfig = {
    levels: {
        'lib/bem-core/common.blocks': {scheme: 'nested'},
        'lib/bem-core/desktop.blocks': {scheme: 'nested'},
        'lib/bem-components/common.blocks': {scheme: 'nested'},
        'lib/bem-components/desktop.blocks': {scheme: 'nested'},
        'common.blocks': {scheme: 'nested'},
        'desktop.blocks': {scheme: 'nested'}
    }
};

var levels = [
    'libs/bem-core/common.blocks',
    'libs/bem-core/desktop.blocks',
    'libs/bem-components/common.blocks',
    'libs/bem-components/desktop.blocks',
    'common.blocks',
    'desktop.blocks'
];

var jsTransform = lazypipe()
    .pipe(uglify);

gulp.task(bundles);
gulp.task(clean);

function bundles() {
    return gulp.src('*.bundles/*/*.bemjson.js')
        .pipe(through.obj(function(file, enc, cb) {
            if (file.isNull()) {
                cb(null, file);
            }

            var newFile = file.clone({contents: false});
            newFile.data = bemjsonToDecl.convert(require(file.path));
            newFile.contents = null;
            newFile.path = file.path.replace('.bemjson.js', '.decl.js');
            cb(null, newFile);
        }))
        .pipe(through.obj(function(file, enc, cb) {
            toArray(bemDeps.load({levels: levels}), function(err, relations) {
                if (err) {
                    return cb(err);
                }
                var deps = bemDeps.resolve(file.data, relations);

                toArray(walk(levels, walkConfig), function(err, fsEntities) {
                    if (err) {
                        return cb(err);
                    }

                    filterDeps(deps.entities, fsEntities, 'js', function(err, readyToConcat) {
                        var paths = readyToConcat.map(function(p) {
                            return path.relative(file.base, p.path);
                        });

                        console.log(paths);

                        gulp.src(paths)
                            .pipe(concat(file.relative.replace('.decl.js', '.js')))
                            .pipe(through.obj(function(newFile, enc, newCb) {
                                console.log(newFile.base);
                                console.log(newFile.path);
                                console.log(newFile.relative);
                                cb(null, newFile);
                                newCb();
                            }));
                    });
                });
            });
        }))
        .pipe(jsTransform())
        .pipe(gulp.dest('build'));
}

function clean() {
    return del(['build']);
}

/**
 * map bem-deps by bem-walk-entities
 * @param  {Array} deps        – bem-deps [{ block, elem, modName, modVal }, ...]
 * @param  {Array} fsEntities  – bem-walk [{ entity: { block, elem, modName, modVal }, tech }, ...]
 * @param  {String} tech       - tech name: 'js' || 'css' || 'bemhtml' || ...
 * @param  {Function} cb       - callback with filtred deps with files
 */
function filterDeps(deps, fsEntities, tech, cb) {
    var entitiesWithTech = [];

    deps.forEach(function(entity) {
        var ewt = fsEntities.filter(function(o) {
            if(o.tech !== tech) return;
            if(o.entity.block !== entity.block) return;
            if(o.entity.elem !== entity.elem) return;
            if(o.entity.modName !== entity.modName) return;
            if(o.entity.modVal !== entity.modVal) return;
            return true;
        });

        entitiesWithTech = [].concat(entitiesWithTech, ewt);
    });

    cb(null, entitiesWithTech);
}
