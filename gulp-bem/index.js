var gulp = require('gulp');
var clone = require('gulp-clone');
var through = require('through2');
var walk = require('bem-walk');
var bemDeps = require('@bem/deps');
var toArray = require('stream-to-array');
var File = require('vinyl');
var fs = require('fs');
var gBemjsonToBemdecl = require('./bemjson2bemdecl');

var DUMP = through.obj(function(file, enc, cb) {
    console.log(file.path);
    cb(null, file);
});

function BEMProject(opts) {
    this.levels = opts.levels || [];
    this.levelsConfig = opts.levelsConfig || {};
    this.levelsCache = null;
}

BEMProject.prototype.init = function(levels) {
    levels = levels || this.levels;

    return toArray(walk(levels, {levels: this.levelsConfig}))
        .then(levelsCache => {
            this.levelsCache = levelsCache;
            levelsCache.sort((a, b) => {
                a = a.path.replace(/(.*.blocks).*/, '$1');
                b = b.path.replace(/(.*.blocks).*/, '$1');

                a = levels.indexOf(a);
                b = levels.indexOf(b);

                return a - b;
            });
        });
};

BEMProject.prototype.src = function(opts) {
    opts = opts || {};
    var levels = opts.levels || this.levels;
    var extensions = opts.extensions || [opts.tech];

    if (!opts.tech) {
        throw new Error('You should pass tech property to bem.src()');
    }

    if (!this.levelsCache) {
        throw new Error('You should call bem.init() method first');
    }

    var bem = this;
    var res = gulp.src(opts.decl);

    if (/\.bemjson\.js$/.test(opts.decl)) {
        res = res.pipe(gBemjsonToBemdecl());
    }

    return res.pipe(through.obj(function(file, enc, cb) {
        var self = this;
        toArray(bemDeps.load({levels: levels}), function(err, relations) {
            if (err) {
                return cb(err);
            }

            var deps = bemDeps.resolve(file.data, relations);
            // todo: redundand introspec
            filterDeps(deps.entities, bem.levelsCache, extensions, function(err, sourceFiles) {
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
        });
    }));
};

BEMProject.prototype.bundle = function (opts) {
    opts || (opts = {});
    opts.levels || (opts.levels = this.levels);
    opts.levelsCache || (opts.levelsCache = this.levelsCache);
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
            if(extensions.indexOf(file.tech) === -1) return;
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
 * [BEMBundle description]
 * @param {Object} opts
 * @param {String} opts.name
 * @param {String} opts.decl
 * @param {String[]} opts.levels
 * @param {?String} opts.path
 */
function BEMBundle(opts) {
    opts = opts || {};

    // todo: make it asserts
    if (!opts.name) throw new Error('Bundle requires `name` property');
    if (!opts.decl) throw new Error('Bundle requires `decl` property with bemjson.js or bemdecl.js file');
    if (!opts.levels || !Array.isArray(opts.levels)) throw new Error('`levels` property should be an array');
    this._name = opts.name;
    this._decl = opts.decl;
    this._levels = opts.levels;
    this._levelsCache = opts.levelsCache;

    this._path = opts.path || './build';

    var declStream = gulp.src(opts.decl);

    if (/\.bemjson\.js$/.test(opts.decl)) {
        this._bemjson = declStream;
        this._bemdecl = declStream.pipe(clone()).pipe(gBemjsonToBemdecl());
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

        bundle._deps.then(function(relations) {
            var deps = bemDeps.resolve(file.data, relations);

            // todo: redundand introspec
            filterDeps(deps.entities, bundle._levelsCache, extensions, function(err, sourceFiles) {
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
        }).catch(cb);
    }));
};

BEMBundle.prototype.dest = function (path) {
    return gulp.dest(this._path);
};
BEMBundle.prototype.name = function (tech) {
    return `${this._name}.${tech}`;
};

module.exports = BEMProject;
