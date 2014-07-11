var fs = require('fs'),
    Vow = require('./libs/bem-core/common.blocks/vow/vow.vanilla.js'),
    vm = require('vm');

var BEMHTML = require('./desktop.bundles/index/index.bemhtml.js').BEMHTML
    BEMTREE = fs.readFileSync('./desktop.bundles/index/index.bemtree.js');

var ctx = vm.createContext({
    Vow: Vow,
    console: console,
    setTimeout: setTimeout
});

vm.runInContext(BEMTREE, ctx);

ctx.BEMTREE.apply({ block: 'test' }).then(function(bemjson) {
    console.log('bemjson', bemjson);
    console.log('bemjson.content._value.content', bemjson.content._value.content);
    console.log('html', BEMHTML.apply(bemjson));
});
