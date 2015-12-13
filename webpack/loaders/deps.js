var loaderUtils = require('loader-utils');
var get = require('lodash.get');
const bemDeps = require('@bem/deps');
const toArray = require('stream-to-array');

/**
 * query:
 * - levels {string|string[]}
 * - techs {string|string[]}
 *
 * @param {string|array} content
 */
module.exports = function(content) {
    var callback = this.async();
    var query = loaderUtils.parseQuery(this.query);

    var exts = query.extensions || get(this.options, 'bem.extensions');
    var levels = query.levels || get(this.options, 'bem.levels');

    var bemdecl = typeof content === 'string'
        ? this.exec(content, this.resourcePath)
        : content; // assume that its a plain object / array

    toArray(bemDeps.load({ levels: levels }), function(err, relations) {
        if (err) {
            callback(err);
        }

        var declaration = bemdecl,
            deps = bemDeps.resolve(declaration, relations, { tech: exts }).entities;

        callback(null, deps);
    });

};
