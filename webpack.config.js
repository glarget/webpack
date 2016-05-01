var path = require('path'),
	webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
  './src/assets/js/main'
  ], // .js after index is optional
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'assets/js/bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
	  sourceMap: false,
      mangle: false
    }),
	new webpack.optimize.OccurenceOrderPlugin(),
	new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
	new webpack.ProvidePlugin({
		$: "jquery",
		jQuery: "jquery",
		"window.jQuery": "jquery"
	}),
	new ExtractTextPlugin("style.css", {
		allChunks: true
	})
  ],
  module: {
    loaders: [
	{
      test: /\.css$/,
	  exclude: /node_modules/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
    },
	{
	  // ASSET LOADER
	  test: /\.(woff|woff2|ttf|eot)$/,
	  exclude: /node_modules/,
	  loader: 'file-loader'
	},
	{	test: /\.(jpe?g|png|gif|svg)$/i, 
		exclude: /node_modules/,
		loader: 'url-loader?limit=1024&name=assets/images/[name].[ext]'
	}
	]
  }
}
