const webpack = require('webpack');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
    cache: true,
    devtool: 'source-map',
    context: __dirname + '/frontend',
    entry: {
        app: './app.module.js'
    },
    output: {
        path: __dirname + '/frontend/build/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015', {modules: false}]
                        ]
                    }
                }]
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {test: /\.json$/, loader: "json-loader"},
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {test: /\.(png|gif)$/, loader: "url-loader?limit=100000"},
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&name=build/fonts/[name].[ext]"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?name=build/fonts/[name].[ext]"
            }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname + '/frontend',
            manifest: require('./frontend/build/lib-manifest.json')
        }),
        //new HardSourceWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        /*new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false}
        }),*/
    ]
};
