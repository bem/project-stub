'use strict';

const vm = require('vm');
const fs = require('fs');
const bemjsonToDecl = require('bemjson-to-decl');
const bemdeclToFs = require('bemdecl-to-fs');

const levels = [
    'libs/bem-core/common.blocks',
    'libs/bem-core/desktop.blocks',
    'libs/bem-components/common.blocks',
    'libs/bem-components/desktop.blocks',
    'libs/bem-components/design/common.blocks',
    'libs/bem-components/design/desktop.blocks',
    'common.blocks',
    'desktop.blocks'
];


/**
 * @param  {Object} bemjson
 */
function discover(bemjson) {
    const content = bemjsonToDecl.stringify(bemjson);
    const deps = vm.runInNewContext(content);
    return bemdeclToFs(deps, levels, 'bh.js');
}

var bemjson = require('../../desktop.bundles/index/index.bemjson');


discover(bemjson).then(files => {
    var bh = new (require('bh').BH);
    files.forEach(file => {
        require(file)(bh);
    });
    fs.writeFileSync('./dist/index.html', bh.apply(bemjson), 'utf-8')
});
