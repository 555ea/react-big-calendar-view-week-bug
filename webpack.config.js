var path = require('path');
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var historyApiFallback = require('connect-history-api-fallback')

module.exports = {
    entry: {
        app: [
            'babel-polyfill',
            path.resolve(__dirname, 'src/main.js')
        ]
    },
    devtool: 'eval',
    output: {
        pathinfo: true,
        path: path.resolve(__dirname, 'dist'),
        publicPath: './dist/',
        filename: 'bundle.js'
    },
    watch: true,
    cache: true,
    plugins: [
        new BrowserSyncPlugin({
            host: process.env.IP || 'localhost',
            port: process.env.PORT || 3000,
            server: {
                baseDir: ['./', './build'],
                middleware: [historyApiFallback()]
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: path.join(__dirname, 'src'),
                query: {
                    cacheDirectory: true
                }
            },
            {
                test: /.json$/,
                loaders: [
                    'json'
                ]
            },
            {
                test: /\.(css|scss)$/,
                loaders: [
                    'style',
                    'css?sourceMap',
                    'sass-loader?sourceMap'
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader',
            },
        ]
    },
}
