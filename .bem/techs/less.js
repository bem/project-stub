var FS = require('fs'),
    Q = require('bem/node_modules/q'),
    LESS = require('less');

exports.techMixin = {

    storeBuildResults: function(prefix, res) {
        var _this = this;

        return Q.when(res, function(res) {
            return _this.storeBuildResult(_this.getPath(prefix, 'css'), 'css', _this.compileBuildResults(res));
        });
    },

    compileBuildResults: function(res) {
        var result = Q.defer(),
            flatRes = res.css.concat(res.less).join('\n');

        LESS.render(flatRes, function(err, css) {
            if (err) return result.reject(err);

            return result.resolve(css);
        });

        return result.promise;
    },

    getBuildResultChunk: function(relPath, path, suffix) {
        return this.wrapBuildResultChunk(this.readContent(path, suffix), relPath);
    },

    wrapBuildResultChunk: function(chunk, path) {

        return Q.when(chunk)
            .then(function(chunk) {

                return [
                    '/* ' + path + ': begin */ /**/',
                    chunk + ';',
                    '/* ' + path + ': end */ /**/',
                    '\n'].join('\n');

            });

    },

    /**
     * Collect `.less` and `.css` files from blocks on `bem build`.
     *
     * @return {Array}
     */
    getSuffixes: function() {
        return ['css', 'less'];
    },

    /**
     * Create only `.less` files for blocks on `bem create`.
     *
     * @return {Array}
     */
    getCreateSuffixes: function() {
        return ['less'];
    }

};