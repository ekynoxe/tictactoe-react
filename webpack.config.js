/* global __dirname */
const path = require('path');

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
};
