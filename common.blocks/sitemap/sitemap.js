modules.define('sitemap__close', ['i-bem-dom', 'button'], function(provide, bemDom, Button) {

provide(bemDom.declElem('sitemap', 'close', {}, {
    lazyInit : true,

    onInit: function() {
        this._events(Button).on('click', function() {
            console.log('clickClose');
            this._emit('click');
        });
    }

}));
});
