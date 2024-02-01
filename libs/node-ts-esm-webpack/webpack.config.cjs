const path = require('path');
const isProduction = process.env.NODE_ENV == 'production';

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
			type: 'module'
		}
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
			".js": [".js", ".ts"],
			".cjs": [".cjs", ".cts"],
			".mjs": [".mjs", ".mts"]
		}
	},
};

module.exports = () => {
	if (isProduction) {
		config.mode = 'production';


	} else {
		config.mode = 'development';
	}
	return config;
};
