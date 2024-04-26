const path = require('path')
const isProduction = process.env.NODE_ENV == 'production'

/** @type {import('webpack').Configuration} */
const config = {
	experiments: {
		outputModule: true,
	},
	devtool: 'inline-source-map',
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		clean: true,
		library: {
			type: 'module',
		},
	},
	module: {
		rules: [
			{
				test: /\.([cm]?ts|tsx)$/,
				loader: 'ts-loader',
				exclude: ['/node_modules/'],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js'],
		extensionAlias: {
			'.js': ['.js', '.ts'],
			'.cjs': ['.cjs', '.cts'],
			'.mjs': ['.mjs', '.mts'],
		},
	},
}

module.exports = () => {
	config.mode = isProduction ? 'production' : 'development'
	return config
}
