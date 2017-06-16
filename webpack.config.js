/* global __dirname */
const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');
const config = require('./config/index.js');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('public/js'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: path.join(__dirname, '.', 'src/'),
            exclude: /node_modules/
        }, ],
    },
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify(pkg.version),
            FIREBASE: JSON.stringify(config.firebase)
        })
    ]
};
