var path = require('path');

var gulp = require('gulp');
var gutil = require('gulp-util');
var gconcat = require('gulp-concat');
// var gdebug = require('gulp-debug');

var through = require('through2');
var del = require('del');
var walk = require('bem-walk');
var bemDeps = require('@bem/deps');
var toArray = require('stream-to-array');

var lazypipe = require('lazypipe');

var PluginError = gutil.PluginError;

module.exports = BEM;

function BEM(opts) {
    this.opts = opts = opts || {};
    opts.levels || (opts.levels = {});

    // buggy here: looks like we should pass only needed levels here
    // this.deps = toArray(bemDeps.load({levels: Object.keys(opts.levels)}));
}
var ptp = BEM.prototype;

ptp.src = function(opts) {
    opts = opts || {};

    var bem = this;

    // console.log(this.opts, Object.keys(this.opts.levels));
    // return walk(opts.levels || Object.keys(this.opts.levels), {
    //     levels: this.opts.levels,
    // });

    return gulp.src(opts.decl)// '*.bundles/*/*.bemjson.js')
//        .pipe(gBemjsonToBemdecl())
        .pipe(through.obj(function(file, enc, cb) {
            toArray(bemDeps.load({levels: opts.levels || Object.keys(bem.levels)}), function(err, relations) {
                if (err) {
                    return cb(err);
                }
                var deps = bemDeps.resolve(file.data, relations);
console.log('zxcxz');
                // todo: redundand introspec
                toArray(walk(opts.levels || Object.keys(this.opts.levels), { levels: bem.levels }), function(err, fsEntities) {
                    if (err) {
                        return cb(err);
                    }

                    filterDeps(deps.entities, fsEntities, opts.tech, function(err, readyToConcat) {
                        var paths = readyToConcat.map(function(p) {
                            return path.relative(file.base, p.path);
                        });

                        console.log(paths);

                        gulp.src(paths)
                            .pipe(gconcat(file.relative.replace('.decl.js', `.${opts.tech}`)))
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
        }));
};


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
