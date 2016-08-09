modules.define('page', ['i-bem__dom', 'BEMHTML', 'loader_type_js', 'vow'],
    function(provide, BEMDOM, BEMHTML, loader, vow) {

function loadScript(path) {
    return new vow.Promise(function(resolve, reject) {
        loader(path, resolve, reject);
    });
}

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                var app = this;

                vow.all([
                    loadScript('/static/test1.browser.js'),
                    loadScript('/static/test1.bemhtml.js')
                ]).then(function() {
                    console.info('test1 scripts loaded');

                    BEMHTML.compile(runtimeTemplates);

                    modules.require('i-bem__dom_init', function() {
                        var pageBemhtml = { block : 'test1', content : 'test1' },
                            pageHtml = BEMHTML.apply(pageBemhtml),
                            pageDom = BEMDOM.update(app.elem('container'), pageHtml);
                    });
                });
            }
        }
    }
}));

});
