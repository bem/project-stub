var BH = require('bh').BH;
var path = require('path');

/**
 * @param {string} filename
 */
function BHRenderPlugin(filename) {
  this._filename = filename;
}

BHRenderPlugin.prototype.apply = function (compiler) {
  var filename = this._filename;
  var resources = [];

  compiler.plugin('compilation', function (compilation, callback) {
    compilation.plugin('normal-module-loader', function (loaderContext, module) {
      if (module) {
          if (/\.bh\.js$/i.test(module.resource)) {
            resources.push(module.resource);
          }
      } else  {
          if (/\.bh\.js$/i.test(loaderContext.resource)) {
            resources.push(loaderContext.resource);
          }
      }
    });
  });

  compiler.plugin('emit', function (compilation, callback) {
    var bh = new BH();

    bh.setOptions({
      jsAttrName: 'data-bem',
      jsAttrScheme: 'json'
    });

    resources.forEach(file => {
      require(file)(bh);
    });

    var bemjson = require(path.resolve(compiler.options.context, compiler.options.entry.index));
    var html = bh.apply(bemjson);

    compilation.assets[filename] = {
      source: function () {
        return html;
      },
      size: function () {
        return html.length;
      },
    };

    callback();
  });
};

module.exports = BHRenderPlugin;
