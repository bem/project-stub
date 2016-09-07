modules.define(
    'map',
    ['ymaps__heatmap'],
    function(provide, ymapsHeatmap, Map) {

provide(Map.declMod({ modName: 'heatmap', modVal: true }, {

    /**
     * Initialize new map
     * @return {Promise}
     */
    init: function () {
        return this.__base.apply(this, arguments)
            .then(function (map) {
                var params = this.params,
                    options = params.options;

                this._heatmap = new ymapsHeatmap(params.data);

                options && Object.keys(options).forEach(function (index) {
                    this._heatmap.options.set(index, options[index]);
                }.bind(this));

                this._heatmap.setMap(map);

                return this._heatmap;
            }.bind(this));
    },

    getHeatmap: function () {
        if (this._heatmap) {
            return Promise.resolve(this._heatmap);
        }

        return this.init();
    },

    setData: function (data) {
        this.getHeatmap()
            .then(function (heatmap) {
                heatmap.setData(data);
            });
    }

}, {
    lazyInit: true
}));

});
