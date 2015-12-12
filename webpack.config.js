const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        index: './desktop.bundles/index/index.bemjson.js'
    },


    output: {
        path: path.join(__dirname, 'dist'),
        pathinfo: true,
        filename: '[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'ymodules-loader'
            },
            {
                test: /\.bemjson.js$/,
                loader: 'loaders/bem-extractor?tech[]=bh.js&tech[]=js&tech[]=styl!loaders/bemjson'
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss!stylus')
            },
            {
                test: /\.(gif|png|svg)$/,
                loader: 'url'
            },
            {
                test: /\.bh(\.js)?$/,
                loader: 'loaders/bh'
            }
        ]
    },

    postcss: [
        require('autoprefixer')
    ],

    resolveLoader: {
        modulesDirectories: ['./webpack', './node_modules']
    },

    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
};
