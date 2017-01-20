var webpack = require("webpack");

module.exports = {
	devtool: "eval-source-map",
	entry:  [
		'webpack-hot-middleware/client',
		'./index'
	],
	output: {
		path: __dirname + "",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: "json"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel",
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		inline: true
	}
}