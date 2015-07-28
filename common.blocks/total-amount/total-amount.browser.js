modules.define('total-amount', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                var totalFromApi = 100500;

                this.domElem.text(VAT(totalFromApi));
            }
        }
    }
}));

});
