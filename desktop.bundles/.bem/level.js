var BEM = require('bem');

exports.baseLevelPath = require.resolve('../../.bem/levels/bundles.js');

exports.getConfig = function() {

    return BEM.util.extend(this.__base() || {}, {
        bundleBuildLevels: this.resolvePaths([
            '../../bem-core/common.blocks',
            '../../common.blocks',
            '../../desktop.blocks'
        ])
    });

};
