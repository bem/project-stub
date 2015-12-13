var path = require('path');

var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
// var gdebug = require('gulp-debug');

var through = require('through2');
var del = require('del');
var walk = require('bem-walk');
var bemDeps = require('@bem/deps');
var toArray = require('stream-to-array');

var File = require('vinyl');

var fs = require('fs');

var gBemjsonToBemdecl = require('./bemjson2bemdecl');

var lazypipe = require('lazypipe');

var PluginError = gutil.PluginError;

module.exports = BEM;

function BEM(opts) {
    this.levels = opts.levels || {};

    // buggy here: looks like we should pass only needed levels here
    // this.deps = toArray(bemDeps.load({levels: Object.keys(opts.levels)}));
}
var ptp = BEM.prototype;

ptp.src = function(opts) {
    opts = opts || {};
    if (!opts.tech) throw new Error('You should pass tech property to bem.src');

    opts.levels = opts.levels || Object.keys(bem.levels);
    opts.extensions = opts.extensions || [opts.tech];

    var bem = this;

    // console.log(this.opts, Object.keys(this.opts.levels));
    // return walk(opts.levels || Object.keys(this.opts.levels), {
    //     levels: this.opts.levels,
    // });
    var res = gulp.src(opts.decl);
    console.log(opts.decl);

    if (/\.bemjson\.js$/.test(opts.decl)) {
        console.log('add bemjson2bemdecl');
        res = res.pipe(gBemjsonToBemdecl());
    }

    return res // '*.bundles/*/*.bemjson.js')
        .pipe(through.obj(function(file, enc, cb) {
            var self = this;
            toArray(bemDeps.load({levels: opts.levels || Object.keys(bem.levels)}), function(err, relations) {
                if (err) {
                    return cb(err);
                }
                var deps = bemDeps.resolve(file.data, relations);
                // todo: redundand introspec
                toArray(walk(opts.levels, { levels: bem.levels }), function(err, fsEntities) {
                    if (err) {
                        return cb(err);
                    }

                    filterDeps(deps.entities, fsEntities, opts.extensions, function(err, readyToConcat) {
                        if (err) {
                            return cb(err);
                        }

                        var paths = readyToConcat
                            .forEach(function(p) {
                                var file = new File({path: p.path});
                                // file.contents = fs.createReadStream(p.path);
                                file.contents = fs.readFileSync(p.path);
                                self.push(file);
                            });

                        cb();

                        // console.log(paths);

                        // console.log(path.basename(file.path).replace('.decl.js', `.${opts.tech}`));
                        //gulp.src(paths)
                            // .pipe(concat(path.basename(file.path).replace('.decl.js', `.${opts.tech}`)))
                            // .pipe(through.obj(function(newFile, enc, newCb) {
                            //     console.log(newFile.base);
                            //     console.log(newFile.path);
                            //     console.log(newFile.relative);
                            //     cb(null, newFile);
                            //     newCb();
                            // }));
                    });
                });
            });
        }));
};


/**
 * map bem-deps by bem-walk-entities
 * @param  {Array} deps        – bem-deps [{ block, elem, modName, modVal }, ...]
 * @param  {Array} fsEntities  – bem-walk [{ entity: { block, elem, modName, modVal }, tech }, ...]
 * @param  {String[]} tech     - tech name: 'js' || 'css' || 'bemhtml' || ...
 * @param  {Function} cb       - callback with filtred deps with files
 */
function filterDeps(deps, fsEntities, extensions, cb) {
    var entitiesWithTech = [];

    deps.forEach(function(entity) {
        var ewt = fsEntities.filter(function(o) {
            if(extensions.indexOf(o.tech) === -1) return;
            //console.log('fs=%j\ndecl=%j', o, entity);
            //console.log('res', o.entity.block !== entity.block && o.entity.elem !== entity.elem && o.entity.modName !== entity.modName && o.entity.modVal !== entity.modVal);
            if(o.block !== entity.block) return;
            if(o.elem !== entity.elem) return;
            if(o.modName !== entity.modName) return;
            if(o.modVal !== entity.modVal) return;
            return true;
        });

        entitiesWithTech = [].concat(entitiesWithTech, ewt);
    });

    cb(null, entitiesWithTech);
}
