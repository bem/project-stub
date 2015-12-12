var path = require('path');

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
        loaders: [{
            test: /\.bemjson.js?$/,
            loader: 'loaders/bem-extractor?tech=styl!loaders/bemjson'
        }]
    },

    resolveLoader: {
        modulesDirectories: ['./webpack', './node_modules']
    }
};
