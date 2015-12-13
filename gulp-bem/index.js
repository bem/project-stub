var gulp = require('gulp');
var through = require('through2');
var walk = require('bem-walk');
var bemDeps = require('@bem/deps');
var toArray = require('stream-to-array');
var File = require('vinyl');
var fs = require('fs');
var gBemjsonToBemdecl = require('./bemjson2bemdecl');

function BEM(opts) {
    this.levels = opts.levels || [];
    this.levelsConfig = opts.levelsConfig || {};
    this.levelsCache = null;
}

BEM.prototype.init = function(levels) {
    levels = levels || this.levels;
    return toArray(walk(levels, {levels: this.levelsConfig}))
        .then(levelsCache => this.levelsCache = levelsCache);
};

BEM.prototype.src = function(opts) {
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

module.exports = BEM;
