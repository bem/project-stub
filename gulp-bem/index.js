var fs = require('fs');
var path = require('path');

var gulp = require('gulp');
var clone = require('gulp-clone');
var through = require('through2');
var walk = require('bem-walk');
var bemDeps = require('@bem/deps');
var toArray = require('stream-to-array');
var File = require('vinyl');

var bemjsonToBemdecl = require('./bemjson2bemdecl');

var DUMP = through.obj(function(file, enc, cb) {
    console.log(file.path);
    cb(null, file);
});

function BEMProject(opts) {
    this.levelsConfig = opts.bemconfig || {};
    this.levels = Object.keys(this.levelsConfig);

    this.introspection = _walk(this.levels, {levels: this.levelsConfig});
}

function _walk(levels, conf) {
    return toArray(walk(levels, conf))
        .then(result => {
            result.sort((a, b) => {
                a = a.path.replace(/(.*.blocks).*/, '$1');
                b = b.path.replace(/(.*.blocks).*/, '$1');

                a = levels.indexOf(a);
                b = levels.indexOf(b);

                return a - b;
            });

            return result;
        });
}

// BEMProject.prototype.src = function(opts) {
//     opts = opts || {};
//     var levels = opts.levels || this.levels;
//     var extensions = opts.extensions || [opts.tech];
//
//     if (!opts.tech) {
//         throw new Error('You should pass tech property to bem.src()');
//     }
//
//     if (!this.levelsCache) {
//         throw new Error('You should call bem.init() method first');
//     }
//
//     var bem = this;
//     var res = gulp.src(opts.decl);
//
//     if (/\.bemjson\.js$/.test(opts.decl)) {
//         res = res.pipe(gBemjsonToBemdecl());
//     }
//
//     return res.pipe(through.obj(function(file, enc, cb) {
//         var self = this;
//         toArray(bemDeps.load({levels: levels}), function(err, relations) {
//             if (err) {
//                 return cb(err);
//             }
//
//             var deps = bemDeps.resolve(file.data, relations);
//             // todo: redundand introspec
//             filterDeps(deps.entities, bem.levelsCache, extensions, function(err, sourceFiles) {
//                 if (err) {
//                     return cb(err);
//                 }
//
//                 sourceFiles
//                     .forEach(function(p) {
//                         var file = new File({path: p.path});
//                         // file.contents = fs.createReadStream(p.path);
//                         file.contents = fs.readFileSync(p.path);
//                         self.push(file);
//                     });
//
//                 cb();
//             });
//         });
//     }));
// };
//
BEMProject.prototype.bundle = function (opts) {
    opts || (opts = {});

    // if (opts.levels && (
    //     opts.levels.length !== this.levels.length ||
    //     opts.levels !== this.levels // <----------- TODO <----------
    // )) {
    //     opts.introspection = this.introspection.then(function(levels) {
    //         // filtrrrrr <----------- TODO <------------
    //         return levels;
    //     });
    // } else {
        opts.levels = this.levels;
        opts.introspection = this.introspection;
        // .then(function(res) {
        //     console.log(res);
        //     return res;
        // });
    // }

    return new BEMBundle(Object.assign({}, this.opts, opts));
};

/**
 * map bem-deps by bem-walk-entities
 * @param  {Array} decl        – bem-deps [{ block, elem, modName, modVal }, ...]
 * @param  {Array} fsEntities  – bem-walk [{ entity: { block, elem, modName, modVal }, tech }, ...]
 * @param  {String[]} tech     - tech name: 'js' || 'css' || 'bemhtml' || ...
 * @param  {Function} cb       - callback with filtred decls with files
 */
function filterDeps(decl, fsEntities, extensions, cb) {
    var entitiesWithTech = [];

    decl.forEach(function(entity) {
        var ewt = fsEntities.filter(function(file) {
            if(extensions.indexOf('.' + file.tech) === -1) return;
            if(file.entity.block !== entity.block) return;
            if(file.entity.elem !== entity.elem) return;
            if(file.entity.modName !== entity.modName) return;
            // True modifiers are truly outrageous.
            if(file.entity.modVal === true && !entity.hasOwnProperty('modVal')) return true;
            if(entity.modVal === true && !file.entity.hasOwnProperty('modVal')) return true;

            if(file.entity.modVal !== entity.modVal) return;
            return true;
        });

        entitiesWithTech = [].concat(entitiesWithTech, ewt);
    });

    cb(null, entitiesWithTech);
}

/**
 * BEMBundle
 * @param {Object} opts
 * @param {?String} opts.name
 * @param {String} opts.path
 * @param {String} opts.decl
 * @param {String[]} opts.levels
 * @param {Promise<FileEntity[]>} opts.introspection
 */
function BEMBundle(opts) {
    opts = opts || {};

    // todo: make it asserts
    if (!opts.path) throw new Error('Bundle requires `path` property');
    if (!opts.decl) throw new Error('Bundle requires `decl` property with bemjson.js or bemdecl.js file');
    if (!opts.levels || !Array.isArray(opts.levels)) throw new Error('`levels` property should be an array');
    if (!opts.introspection) throw new Error('Oh my dear');

    this._name = opts.name || path.basename(opts.path);
    this._path = opts.path;
    this._decl = path.resolve(opts.path, opts.decl);
    this._levels = opts.levels;
    this._introspection = opts.introspection;

    var declStream = gulp.src(this._decl);

    if (/\.bemjson\.js$/.test(this._decl)) {
        this._bemjson = declStream;
        this._bemdecl = declStream.pipe(clone()).pipe(bemjsonToBemdecl());
    } else {
        this._bemdecl = declStream;
    }

    this._deps = toArray(bemDeps.load({levels: this._levels}));
}

BEMBundle.prototype.bemjson = function() {
    return this._bemjson.pipe(clone());
};
BEMBundle.prototype.bemdecl = function() {
    return this._bemdecl.pipe(clone());
};

BEMBundle.prototype.src = function(opts) {
    if (!opts.tech) throw new Error('Prokin tech');

    var bundle = this;
    var extensions = opts.extensions || [opts.tech];
    opts = Object.assign({}, {levels: this._levels}, opts);

    return this.bemdecl().pipe(through.obj(function(file, enc, cb) {
        var self = this;

        Promise.all([
            bundle._introspection,
            bundle._deps
        ])
        .then(function(res) {
            var introspection = res[0];
            var relations = res[1];

            var deps = bemDeps.resolve(file.data, relations);

            filterDeps(deps.entities, introspection, extensions, function(err, sourceFiles) {
                if (err) {
                    return cb(err);
                }

                sourceFiles
                    .forEach(function(p) {
                        var file = new File({path: p.path});
                        // file.contents = fs.createReadStream(p.path);
                        file.contents = fs.readFileSync(p.path);
                        self.push(file);
                    });

                cb();
            });
        })
        .catch(cb);
    }));
};

BEMBundle.prototype.dest = function (path) {
    return gulp.dest(this._path);
};
BEMBundle.prototype.name = function () {
    return this._name;
};

module.exports = function (opts) {
    return new BEMProject(opts);
};
