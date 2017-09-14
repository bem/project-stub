const BHRenderPlugin = require('./webpack/plugins/bh-render-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        index: './desktop.bundles/index/index.bemjson.js'
    },

    output: {
        path: path.join(__dirname, 'desktop.bundles/index'),
        pathinfo: true,
        filename: '[name].min.js'
    },

    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'ymodules-loader'
            },
            {
                test: /\.bemjson.js$/,
                loader: 'bemdecl-to-fs!deps!bemjson?stringify=false'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss')
            },
            {
                test: /\.(gif|png|svg)$/,
                loader: 'url'
            },
            {
                test: /\.bh(\.js)?$/,
                loader: 'bh'
            }
        ]
    },

    bem: {
        extensions: [
            'bh.js',
            'js',
            'vanilla.js',
            'css'
        ],
        levels: [
            'node_modules/bem-core/common.blocks',
            'node_modules/bem-core/desktop.blocks',
            'node_modules/bem-components/common.blocks',
            'node_modules/bem-components/desktop.blocks',
            'node_modules/bem-components/design/common.blocks',
            'node_modules/bem-components/design/desktop.blocks',
            'common.blocks',
            'desktop.blocks',
        ]
    },

    devtool: 'source-map',

    postcss: [
        require('autoprefixer'),
        require('postcss-import'),
        require('postcss-each'),
        require('postcss-for'),
        require('postcss-simple-vars'),
        require('postcss-calc'),
        require('postcss-nested'),
        require('rebem-css'),
        require('postcss-url'),
    ],

    resolveLoader: {
        modulesDirectories: ['./webpack', './node_modules']
    },

    plugins: [
        new BHRenderPlugin('index.html'),
        new ExtractTextPlugin('index.min.css')
    ]
};
