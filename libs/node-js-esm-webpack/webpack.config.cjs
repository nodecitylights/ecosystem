const path = require('path');
const isProduction = process.env.NODE_ENV == 'production';

/** @type {import('webpack').Configuration} */
const config = {
	experiments: {
		outputModule: true,
	},
	devtool: 'inline-source-map',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		clean: true,
		library: {
			type: 'module'
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
