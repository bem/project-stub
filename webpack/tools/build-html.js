'use strict';

const vm = require('vm');
const fs = require('fs');
const path = require('path');
const bemjsonToDecl = require('bemjson-to-decl');
const bemdeclToFs = require('bemdecl-to-fs');
const flattenDeps = require('./flatten-deps');

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
    return flattenDeps(depsPartial, levels, ['bh.js']).then(deps => {
        return bemdeclToFs(deps, levels, 'bh.js')
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
