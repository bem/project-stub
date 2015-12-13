var loaderUtils = require('loader-utils');
var get = require('lodash.get');
const flattenDeps = require('../tools/flatten-deps');

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

    flattenDeps(bemdecl, levels, exts).then(deps => callback(null, deps))
};
