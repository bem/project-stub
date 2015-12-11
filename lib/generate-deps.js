var bemDeps = require('@bem/deps'),
    bemjsonTodecl = require('bemjson-to-decl'),
    toArray = require('stream-to-array'),
    toOldDeps = require('./deps-to-old-deps'),

    levels = [
        'libs/bem-core/common.blocks',
        'libs/bem-core/desktop.blocks',
        'libs/bem-components/common.blocks',
        'libs/bem-components/desktop.blocks',
        'libs/bem-components/design/common.blocks',
        'libs/bem-components/design/desktop.blocks',
        'common.blocks',
        'desktop.blocks'
    ],
    bemjson = require('../desktop.bundles/index/index.bemjson.js'),
    declaration = bemjsonTodecl.convert(bemjson);

// console.log('declaration', JSON.stringify(declaration, null, 4));

toArray(bemDeps.load({ levels: levels }), function (err, relations) {
    // console.log('relations', JSON.stringify(relations, null, 4));

    var deps = bemDeps.resolve(declaration, relations);

    // console.log(JSON.stringify(deps, null, 4));

    require('fs').writeFileSync('desktop.bundles/index/index.deps.js',
        'module.exports.deps = ' + JSON.stringify(toOldDeps(deps), null, 4));
});

