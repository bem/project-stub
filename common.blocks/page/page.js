modules.define('page', ['i-bem-dom', 'i18n'], function(provide, bemDom, i18n) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                console.log(i18n('page', 'key'));
            }
        }
    }
}));

});
