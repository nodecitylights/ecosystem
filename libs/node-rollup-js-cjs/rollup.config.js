const commonjs = require('@rollup/plugin-commonjs').default;
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { defineConfig } = require('rollup');
const { dts } = require('rollup-plugin-dts');

module.exports = defineConfig([
	{
		input: 'src/index.js',
		output: [{ file: 'dist/index.js', format: 'cjs', exports: 'named' }],
		plugins: [nodeResolve(), commonjs()],
	},
	{
		input: 'src/index.js',
		output: [{ file: 'dist/index.d.ts', format: 'cjs' }],
		plugins: [dts()],
	}
])
