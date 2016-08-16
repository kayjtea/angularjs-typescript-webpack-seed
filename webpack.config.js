var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var PROD = (process.env.NODE_ENV === 'production')

module.exports = {
    devtool: 'source-map',
    context: path.resolve(__dirname, 'src'),
    entry: {
        // css: ['./main.less'],
        index: ['./main.ts', './main.less']
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'lib/[name].[chunkhash].' + (PROD ? 'bundle.min.js' : 'bundle.js')
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loaders: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.ts$/,
                loaders: ['ng-annotate', 'ts'],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'ngtemplate?relativeTo=/src/!html',
                exclude: /index\.html/
            },
            {
                test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: 'url-loader?limit=30000&name=fonts/[name]-[hash].[ext]'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        })

    ].concat(PROD ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false}
        })
    ] : [])

}