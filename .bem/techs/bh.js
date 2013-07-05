var BEM = require('bem'),
    Q = BEM.require('q'),
    PATH = require('path'),
    SYS = require('util'),
    BH = require('bh/lib/bh-client-processor'),

    readFile = BEM.require('./util').readFile;

exports.getBuildResultChunk = function(relPath, path, suffix) {

    return readFile(path)
        .then(function(c) {

            return [
                '/* ' + path + ': start */',
                BH.process(c),
                '/* ' + path + ': end */',
                '\n'
            ].join('\n');

        });

};

exports.getBuildResult = function(prefixes, suffix, outputDir, outputName) {

    var _this = this;
    return this.filterPrefixes(prefixes, this.getCreateSuffixes())
        .then(function(paths) {
            return Q.all(paths.map(function(path) {
                return _this.getBuildResultChunk(
                    PATH.relative(outputDir, path), path, suffix);
            }));
        })
        .then(function(sources) {
            sources = sources.join('\n');

            return readFile(PATH.resolve('node_modules/bh/lib/bh.js'))
                .then(function(bh) {
                    return [
                        bh,
                        'var bh = new BH();',
                        'module.exports.INST = bh;',
                        sources
                    ].join('\n');
                });
        });

};

exports.getSuffixes = function() {
    return ['bh.js'];
};

exports.getBuildSuffixes = function() {
    return ['bh.js'];
};
