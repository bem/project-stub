var through2 = require('through2');
var bemxjst = require('bem-xjst');
var File = require('vinyl');

module.exports = function () {
    var templates = [];

    return through2.obj(function (template, enc, callback) {
        template.contents = new Buffer(bemxjst.generate(template.contents.toString()));

        this.push(template);

        callback();
    });
};
