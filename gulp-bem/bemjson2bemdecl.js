var through = require('through2'),
    bemjsonToDecl = require('bemjson-to-decl'),
    requireOrEval = require('enb-require-or-eval');

module.exports = function(opts) {
    opts = opts || {};
    opts.sourceSuffix = opts.sourceSuffix || '.bemjson.js';
    opts.destSuffix = opts.destSuffix || '.decl.js';

    function bemjson2bemdecl(file, enc, cb) {
        var newFile = file.clone({contents: false});
        newFile.contents = null;
        newFile.path = file.path.replace(opts.sourceSuffix, opts.destSuffix);

        // TODO: reading twice?
        requireOrEval(file.path)
            .then(function(res) {
                newFile.data = bemjsonToDecl.convert(res);
                newFile.contents = new Buffer(JSON.stringify(newFile.data, null, 4), 'utf8');
                cb(null, newFile);
            })
            .catch(cb);
    }

    return through.obj(bemjson2bemdecl);
};
