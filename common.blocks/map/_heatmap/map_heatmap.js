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
            return this.__base()
                .then(function (map) {
                    var params = this.params,
                        options = params.options,
                        isArray = Array.isArray;
                    this._heatmap = new ymapsHeatmap(this.params.data);

                    for (var index in options) {
                        this._heatmap.options.set(index, options[index]);
                    }
                    this._heatmap.setMap(map);
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

    }
);
