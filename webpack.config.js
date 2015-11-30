module.exports = {
	entry: './app/App.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_moduels|bower_components)/,
				loader: 'babel'
			}
		]
	}
};