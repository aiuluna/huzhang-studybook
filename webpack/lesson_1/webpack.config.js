const path = require('path')

module.exports = {
	entry: {
		index: './src/index.js',
		search: './src/search.js',
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundle.js',
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /.js*$/,
				use: 'babel-loader',
			},
			{
				test: /\.(css|less)$/,
				use: ['style-loader', 'css-loader', 'less-loader'],
			},
		],
	},
}
