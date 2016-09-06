/**
 * @module ymaps__heatmap
 * @description Provide ymaps with heatmap (load if it does not exist).
 */

modules.define('ymaps__heatmap', ['loader_type_js', 'ymaps'], function(provide, loader, ymaps) {
    // TODO: use cdn or smth eq
    var apiUrl = 'https://cdn.rawgit.com/yandex/mapsapi-heatmap/master/build/heatmap.min.js';

    loader(apiUrl, onReady);

    function onReady() {
        ymaps.modules.require(['Heatmap'], provide);
    }
});
