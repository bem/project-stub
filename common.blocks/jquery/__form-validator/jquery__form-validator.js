modules.define('jquery__form-validator', ['jquery'], function(provide, jQuery) {

    ({
        jQuery: jQuery,
        init: function() {
            /* borschik:include:../../node_modules/jquery-form-validator/form-validator/jquery.form-validator.js */

            provide(jQuery);
        }
    }).init();

});
