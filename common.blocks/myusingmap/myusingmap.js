modules.define('myusingmap', ['i-bem-dom', 'BEMHTML', 'map'], function (provide, bemDom, BEMHTML, Map) {
    var mapInited = false;

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            'js': {
                'inited': function () {
                    Promise.all([this._getHeatmapData(), this._getCompetitorsData()])
                        .then(function (resolvedData) {
                            var heatmapData = resolvedData[0],
                                competitorsData = resolvedData[1],
                                hItems = heatmapData.items,
                                cItems = competitorsData.items;
                            var data = {
                                    type: 'FeatureCollection',
                                    features: []
                                },
                                competitors = [],
                                center,
                                map;


                            if (!Array.isArray(hItems)) {
                                throw new Error('be');
                            }

                            hItems.forEach(function (item, idx) {
                                data.features.push({
                                    id: 'id' + idx,
                                    type: 'Feature',
                                    geometry: {
                                        type: 'Point',
                                        coordinates: [item.lat, item.lon]
                                    },
                                    properties: {
                                        weight: item.weight
                                    }
                                });
                            });

                            center = [hItems[0].lat, hItems[0].lon];

                            Array.isArray(cItems) && cItems.forEach(function (item, idx) {
                                competitors.push({
                                    coords: [item.lat, item.lon],
                                    props: {
                                        hintContent: name
                                    },
                                    opts: {
                                        iconLayout: 'default#image',
                                        iconImageHref: 'http://hadar.backa.dev.yandex.net/heatmap_example_files/poi3.svg',
                                        iconImageSize: [12, 12]
                                    }
                                });
                            });

                            var newNode = bemDom.update(
                                this.domElem,
                                BEMHTML.apply({
                                    block: 'map',
                                    mods: { heatmap: true },
                                    js: {
                                        center: center,
                                        data: data,
                                        points: competitors,
                                        controls: ['zoomControl', 'fullscreenControl'],
                                        zoom: 12
                                    }
                                })
                            );
                            return this.findChildBlock(Map).init();
                        }.bind(this));
                }
            }
        },

        _getHeatmapData: function () {
            var data = {
                total: 22,
                main_rubric: {
                    total: 12,
                    names: [
                        {
                            value: "Зоо магазин",
                            locale: "ru"
                        },
                        {
                            value: "Zoo shop",
                            locale: "en"
                        }
                    ]
                },
                items: [
                    {
                        lat: 53.1121,
                        lon: 30.112,
                        weight: 13
                    },
                    {
                        lat: 53.1121,
                        lon: 30.122,
                        weight: 4
                    },
                    {
                        lat: 53.1021,
                        lon: 30.112,
                        weight: 1
                    },
                    {
                        lat: 53.1221,
                        lon: 30.112,
                        weight: 4
                    }
                ]
            };
            return Promise.resolve(data);
        },

        _getCompetitorsData: function () {
            var data = {
                "best_competitor":
                    {
                        "shows":102,
                        "previews":23,
                        "phone_click":4,
                        "route_click":10
                    },
                "nearby_competitors":
                    {
                        "half_km":2,
                        "one_km":7,
                        "two_km":9,
                        "three_km":15
                    },
                "items": [
                    {"lat":53.1121,"lon":30.112,"names":[{"value":"Компьютерный клуб","locale":"ru"},{"value":"PC club","locale":"en"}]},
                    {"lat":53.1141,"lon":30.012,"names":[{"value":"Какой-то еще конкурент","locale":"ru"}]}
                ]
            };
            return Promise.resolve(data);
        }
    }))
});
