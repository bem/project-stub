var fs = require('fs'),
    path = require('path'),
    enbBemTechs = require('enb-bem-techs');

module.exports = function(config, node) {
    node || (node = '*.bundles/merged');

    config.nodes(node, function(nodeConfig) {
        var nodePath = nodeConfig.getPath(),
            mergedBundleName = path.basename(nodePath),
            dir = path.dirname(nodePath),
            bundles = fs.readdirSync(dir),
            bemdeclFiles = [];

        // copy BEMDECL files to merged bundle
        bundles.forEach(function(bundle) {
            if (bundle === mergedBundleName || bundle[0] === '.') return;

            var node = path.join(dir, bundle),
                target = bundle + '.bemdecl.js';

            nodeConfig.addTech([enbBemTechs.provideBemdecl, {
                node: node,
                target: target
            }]);

            bemdeclFiles.push(target);
        });

        // join BEMDECL files
        nodeConfig.addTech([enbBemTechs.mergeBemdecl, { sources: bemdeclFiles }]);
    });
}
