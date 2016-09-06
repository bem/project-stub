modules.define('map', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {

    /**
     * Инициализирует карту на текущей дом ноде
     * @returns {Promise}
     */
    init: function() {
        return this._getYMaps()
            .then(function(YMaps) {
                var params = this.params,
                    center = params.center,
                    points = params.points,
                    isArray = Array.isArray;

                this.YMaps = YMaps;

                this._map = new this.YMaps.Map(this.domElem.get(0), {
                    center: center,
                    zoom: params.zoom || 14,
                    behaviors: params.behaviors,
                    controls: params.controls
                });

                if (points) {
                    points.forEach(function(point) {
                        isArray(point) ?
                            this.addPlacemark(point, params.props, params.options) :
                            this.addPlacemark(point.coords, point.props, point.opts);
                    }, this);

                    points.length > 1 && this.setBounds(this.getBoundsSync(points.map(function(point) {
                        return isArray(point) ? point : point.coords;
                    })));
                }

                return this._map;
            }.bind(this)).catch(console.log.bind(console));
    },

    /**
     * Возвращает текущую карту, или инициализирует новую
     * @returns {Promise}
     */
    getMap: function() {
        if (this._map) {
            return Promise.resolve(this._map);
        }

        return this.init();
    },

    /**
     * Добавляет точку на карту
     * @param point
     * @param props
     * @param options
     * @returns {Promise}
     */
    addPlacemark: function(point, props, options) {
        return this.getMap().then(function() {
            var placemark = new this.YMaps.Placemark(point, props, options);

            this._map.geoObjects.add(placemark);

            placemark.events.add('drag', function() {
                this._emit('drag', placemark.geometry.getCoordinates());
            }.bind(this));

            return placemark;
        }.bind(this));
    },

    /**
     * Синхронно пересчитывает размеры точек
     * @param points
     * @returns {Array}
     */
    getBoundsSync: function(points) {
        return points.reduce(function(prev, cur) {
            if (!prev[0]) return [[].concat(cur), [].concat(cur)];

            if (prev[0][0] > cur[0]) {
                prev[0][0] = cur[0];
            }

            if (prev[0][1] > cur[1]) {
                prev[0][1] = cur[1];
            }

            if (prev[1][0] < cur[0]) {
                prev[1][0] = cur[0];
            }

            if (prev[1][1] < cur[1]) {
                prev[1][1] = cur[1];
            }

            return prev;
        }, []);
    },

    /**
     * Устанавливает карту между двумя точками
     * @param point1
     * @param point2
     * @returns {Promise}
     */
    setBounds: function(point1, point2) {
        if (!point2) {
            point2 = point1[1];
            point1 = point1[0];
        }

        // Новые центр и коэффициент масштабирования карты вычисляются на основе текущего состояния карты.
        // Если текущий zoomRange не совпадает с zoomRange для нового центра карты,
        // могут быть отображены серые тайлы в случае, если область показа очень мала.
        // Чтобы избежать этой проблемы, всегда используем опцию checkZoomRange.
        return this.getMap().then(function(map) {
            map.setBounds([point1, point2], { checkZoomRange: true });
        });
    },

    /**
     * Центрирует карту по двум координатам
     * @param map
     * @param autoCoordinates
     * @param manualCoordinates
     * @returns {Promise}
     */
    setMapCenter: function(map, autoCoordinates, manualCoordinates) {
        return map.setBounds(map.getBoundsSync([autoCoordinates, manualCoordinates]));
    },

    /**
     * Перемещает к центру карты
     * @param point
     * @returns {Promise}
     */
    panTo: function(point) {
        return this.getMap().then(function(map) {
            return map.panTo(point, {
                delay: 500 // Задержка между перемещениями
            });
        });
    },

    /**
     * Получаем YMaps
     * @returns {Promise}
     * @private
     */
    _getYMaps: function() {
        return new Promise(function(resolve) {
            modules.require('ymaps', function(YMaps) {
                resolve(YMaps);
            });
        });
    }
}, {
    lazyInit: true
}));

});
