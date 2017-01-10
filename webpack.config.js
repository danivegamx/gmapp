var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'js/build');
var APP_DIR = path.resolve(__dirname, 'js/src/index.jsx');

var config = {
    entry: APP_DIR,
    output: {
        path: BUILD_DIR,
        filename: '/bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};

module.exports = config;
