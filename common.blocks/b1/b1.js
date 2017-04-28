modules.define('b1', ['i-bem-dom', 'BEMHTML'], function(provide, bemDom, BEMHTML) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                bemDom.update(this.domElem, BEMHTML.apply({
                    block: 'b1',
                    elem: 'e1'
                }));
            }
        }
    }
}));

});
