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
	devServer: {
		contentBase: "./",
		colors: true,
		historyApiFallback: true,
		inline:true,
		hot: true
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
			},
			{
				enforce: "pre", 
				test: /\.js$/,  
				loader: "eslint-loader", 
				exclude: /node_modules/
			}
		]
	},
	postcss:[
		require("autoprefixer")
	],
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		inline: true
	}
}