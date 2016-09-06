modules.define('myusingmap', ['i-bem-dom', 'map'], function (provide, bemDom, Map) {
    var mapInited = false;

    provide(bemDom.declBlock(this.name, {
        _initMap: function () {
            mapInited || this.findChildBlock(Map).init();
            mapInited = true;
        },

        _addData: function () {
            this.findChildBlock(Map).addPlacemark([37.782551, -122.441368]);
        }
    }, {
        lazyInit: true,

        onInit: function () {
            this._domEvents(this.name).on('mouseover', this.prototype._initMap);
            this._domEvents(this.name).on('click', this.prototype._addData);

            return this.__base.apply(this, arguments);
        }
    }))
});
