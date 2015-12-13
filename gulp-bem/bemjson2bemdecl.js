var through = require('through2');
var bemjsonToDecl = require('bemjson-to-decl');
var requireOrEval = require('enb-require-or-eval');

module.exports = function(opts) {
    return through.obj(function(file, enc, cb) {
        if (file.isNull()) {
            cb(null, file);
        }

        var newFile = file.clone({contents: false});
        newFile.contents = null;
        newFile.path = file.path.replace('.bemjson.js', '.decl.js');

        // reading twice?
        requireOrEval(file.path).then(function(res) {
            console.log('zxczxc');
            newFile.data = bemjsonToDecl.convert(res);
            cb(null, newFile);
        });
    });
};
