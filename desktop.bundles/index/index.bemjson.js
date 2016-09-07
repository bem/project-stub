module.exports = {
    block : 'page',
    title : 'Title of the page',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'index.min.css' }
    ],
    scripts: [{ elem : 'js', url : 'index.min.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block: 'myusingmap',
            // content: {
            //     block: 'map',
            //     mods: { heatmap: true },
            //     js: {
            //         center: [37.782551, -122.445368],
            //         points: [{
            //             coords: [37.782551, -122.445368],
            //             opts: { draggable: true, preset: 'islands#blueStretchyIcon' }
            //         }],
            //         options: {
            //             opacity: 1
            //         },
            //         data: [[37.782551, -122.445368], [37.782745, -122.444586]],
            //         controls: ['rulerControl', 'typeSelector', 'zoomControl', 'fullscreenControl']
            //     }
            // }
        }
    ]
};
