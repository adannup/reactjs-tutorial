const debug 	=	process.env.NODE_ENV !== "production";
const path 		= 	require('path');
const webpack	=	require('webpack');

module.exports = {
	entry: "./src/js/app.js",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist'
	},
	module: {
		rules: [
			{
				test: /.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'react', 'stage-0'],
						plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
					}
				}
			}
			
		]
	},
	plugins: debug ? [] : [
		new webpack.optimize.DedudePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false}),
	]
};