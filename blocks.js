require('./libs/bem-components/common.blocks/input/input.bh');
require('./libs/bem-components/common.blocks/button/button.bh');

var bh = require('./webpack/loaders/bh/runtime');

console.log(bh.apply({
    block: 'test',
    content: [
        {block: 'input'},
        {block: 'button'}
    ]
}));
