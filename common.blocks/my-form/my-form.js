modules.define('my-form', ['i-bem__dom', 'form'], function(provide, BEMDOM, Form) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                Form.on(this.domElem, 'submit', function(e, data) {
                    var form = e.target;
                    console.log('e', e, 'data', data);
                    form.validate().then(function(validationResult) {
                        console.log('validationResult', validationResult);
                        console.log(status, form.getStatus());
                    });
                });
            }
        }
    }
}));

});
