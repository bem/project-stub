'use strict';

const vm = require('vm');
const fs = require('fs');
const path = require('path');
const bemjsonToDecl = require('bemjson-to-decl');
const bemdeclToFs = require('bemdecl-to-fs');

var bemDeps = require('@bem/deps'),
    toArray = require('stream-to-array');

const levels = [
    'libs/bem-core/common.blocks',
    'libs/bem-core/desktop.blocks',
    'libs/bem-components/common.blocks',
    'libs/bem-components/desktop.blocks',
    'libs/bem-components/design/common.blocks',
    'libs/bem-components/design/desktop.blocks',
    'common.blocks',
    'desktop.blocks'
].map(function(level) {
    return path.join(__dirname, '../..', level);
});

/**
 * @param  {Object} bemjson
 */
function discover(bemjson) {
    let json = JSON.parse(JSON.stringify(bemjson));
    const content = bemjsonToDecl.stringify(json);
    const depsPartial = vm.runInNewContext(content);

    return new Promise(function(resolve) {
        toArray(bemDeps.load({ levels: levels }), function(err, relations) {
            var declaration = depsPartial,
                res = bemDeps.resolve(declaration, relations, { tech: 'bh.js' });

            bemdeclToFs(res.entities, levels, 'bh.js')
                .then(function(files) {
                    resolve(files);
                });
        });
    });
}

var bemjson = require('../../desktop.bundles/index/index.bemjson');

discover(JSON.parse(JSON.stringify(bemjson))).then(files => {
    var bh = new (require('bh').BH);
    bh.setOptions({
        jsAttrName: 'data-bem',
        jsAttrScheme: 'json'
    });

    files.forEach(file => {
        require(file)(bh);
    });

    fs.writeFileSync('./dist/index.html', bh.apply(bemjson), 'utf-8')
});
