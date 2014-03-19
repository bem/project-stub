var BEM = require('bem'),
    Q = BEM.require('q'),
    exec = require('child_process').exec;

exports.API_VER = 2;

exports.techMixin = {

    storeCreateResult: function(path, suffix, res, force) {
        var prefix = path.replace(/\.html$/, ''),
            xsl =  prefix + '.html.xsl',
            xml = prefix + '.xml',
            defer = Q.defer();

        exec('xsltproc -o ' + path + ' ' + xsl + ' ' + xml,
            function (err, stdout, stderr) {
                if (err) return defer.reject();

                defer.resolve();
            }
        );

        return defer.promise;
    },

    getDependencies: function() {
        return ['xml', 'html.xsl'];
    }

};
