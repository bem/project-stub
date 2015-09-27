var vow = require('vow'),
    base = require('enb-bembundle/techs/js-bembundle-component');

module.exports = base.buildFlow()
    .methods({
        buildBundle : function(jsChunks, cssChunks) {
            var _this = this;
            return vow.when(this.buildJsBody(jsChunks)).then(function (jsBody) {
                var hcssChunks = cssChunks.map(function (chunk) {
                    return [chunk.hash, chunk.data];
                });
                return [
                    'modules.require([\'loader_type_bundle\'], function(loader) {',
                    'loader._loaded({',
                    'id: \'', _this.node.getTargetName(), '\',\n',
                    'js: function(){\n',
                        _this.__self.getOnceFunctionDecl(),
                        '\n',
                        jsBody,
                    '\n},\n',
                    'hcss: ', JSON.stringify(hcssChunks, null, 4), '\n',
                    '});',
                    '});'
                ].join('');
            });
        }
    })
    .createTech();
