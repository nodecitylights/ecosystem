const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
	target: ['node', 'es2020'],
	mode: 'production',
	entry: './src/index.ts',
	devtool: 'inline-source-map',
	experiments: {
		outputModule: true,
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		globalObject: 'this',
		clean: true,
		library: {
			type: 'module',
		},
	},
	module: {
		rules: [
			{
				test: /\.ts(x)?$/,
				use: {
					loader: 'ts-loader',
					/** @type {import('ts-loader').Options} */
					options: {},
				},
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		extensionAlias: {
			'.ts': ['.js', '.ts'],
			'.cts': ['.cjs', '.cts'],
			'.mts': ['.mjs', '.mts']
		}
	},
};
