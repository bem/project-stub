modules.define('page', ['i-bem__dom', 'loader_type_bundle'], function(provide, BEMDOM, loader) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                loader('index', 'index.bembundle.js', function() {
                    console.log('success');
                }, function() {
                    console.log('error :(');
                });

                console.log('loader asked for a bundle');
            }
        }
    }
}));

});
