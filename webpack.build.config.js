var webpack = require("webpack");

module.exports = {
	devtool: "eval-source-map",
	entry:  [
		"./index"
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
			},
			{
				test: /\.css$/,
				loader: "style!css?modules"
			}
		]
	}
}