const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        index: './desktop.bundles/index/index.bemjson.js'
    },


    output: {
        path: path.join(__dirname, 'build'),
        pathinfo: true,
        filename: 'index.js'
    },

    module: {
        loaders: [
            // {
            //     test: /\.bemjson.js?$/,
            //     loader: ExtractTextPlugin.extract('style', 'css!stylus!loaders/bem-extractor?tech=styl!loaders/bemjson')
            // }
            {
                test: /\.bemjson.js$/,
                loader: 'loaders/bem-extractor?tech=styl!loaders/bemjson'
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract('style', 'css!stylus')
            },
            {
                test: /\.(gif|png|svg)$/,
                loader: 'url'
            }
        ]
    },

    resolveLoader: {
        modulesDirectories: ['./webpack', './node_modules']
    },

    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
};
