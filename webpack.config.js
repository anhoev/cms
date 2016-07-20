const webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	context: __dirname + "/frontend",
	entry: {
		app: './app.module.js'
	},
	output: {
		path: './frontend',
		filename: 'build/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.html$/,
				loader: 'raw'
			},
            { test: /\.json$/, loader: "json" },
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{ test: /\.(png|gif)$/, loader: "url-loader?limit=100000" },
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&name=build/fonts/[name].[ext]" },
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?name=build/fonts/[name].[ext]" }
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			'root.jQuery': 'jquery'
		}),
		new webpack.DllReferencePlugin({
			context: '.',
			manifest: require('./frontend/build/lib-manifest.json')
		})
	]
};
