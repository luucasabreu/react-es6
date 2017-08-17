module.exports = {
	entry: "./app/App.js",
	output: {
		filename: "public/bundle.js"
	},
	resolve: {
		alias: {
			'@': `${__dirname}/app`,
		},
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-2']
				}
			}
		]
	}
}