const BHRenderPlugin = require('./webpack/plugins/bh-render-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const levels = [
    'node_modules/bem-core/common.blocks',
    'node_modules/bem-core/desktop.blocks',
    'node_modules/bem-components/common.blocks',
    'node_modules/bem-components/desktop.blocks',
    'node_modules/bem-components/design/common.blocks',
    'node_modules/bem-components/design/desktop.blocks',
    'common.blocks',
    'desktop.blocks'
];
const extensions = [
    'bh.js',
    'js',
    'vanilla.js',
    'css'
];

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
        rules: [
            {
                test: /\.js/,
                use: 'ymodules-loader'
            },
            {
                test: /\.bemjson.js$/,
                use: [
                    {
                        loader: 'bemdecl-to-fs-loader',
                        options: {
                            extensions: extensions,
                            levels: levels
                        }
                    },
                    {
                        loader: 'deps-loader',
                        options: {
                            extensions: extensions,
                            levels: levels
                        }
                    },
                    'bemjson-loader'
                ]
            },
            {
                test: /\.bh(\.js)?$/,
                use: 'bh-loader'
            },

            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                          loader: 'css-loader',
                          options: {
                            importLoaders: 1,
                          },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    require('autoprefixer'),
                                    require('postcss-import'),
                                    require('postcss-each'),
                                    require('postcss-for'),
                                    require('postcss-simple-vars'),
                                    require('postcss-calc'),
                                    require('postcss-nested'),
                                    require('rebem-css'),
                                    require('postcss-url'),
                                ]
                            }
                        },
                    ],
                    publicPath: 'desktop.bundles/index'
                })
            },

            {
                test: /\.(gif|png|svg)$/,
                use: 'url-loader'
            }
        ]
    },


    devtool: 'source-map',

    plugins: [
        new BHRenderPlugin('index.html'),
        new ExtractTextPlugin({
            filename: 'index.min.css'
        })
    ]
};
