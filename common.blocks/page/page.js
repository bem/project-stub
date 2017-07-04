modules.define('page', ['i-bem-dom', 'jquery__form-validator'], function(provide, bemDom, $) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                console.log('result:', $.validate);
            }
        }
    }
}));

});
