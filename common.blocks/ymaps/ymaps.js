/**
 * @module ymaps
 * @description Provide ymaps (load if it does not exist).
 */

modules.define('ymaps', ['loader_type_js'], function(provide, loader) {

    var apiUrl = 'https://api-maps.yandex.ru/2.1/';

    function onReady() {
        window.ymaps.ready(function() {
            provide(window.ymaps);
        }, this);
    }

    typeof window.ymaps === 'undefined' ? loader(apiUrl + '?lang=' + ('ru_RU'), onReady) : onReady();
});
