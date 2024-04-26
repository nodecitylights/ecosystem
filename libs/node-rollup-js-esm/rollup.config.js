import { defineConfig } from 'rollup'
import { dts } from 'rollup-plugin-dts'

export default defineConfig([
	{
		input: 'src/index.js',
		output: [{ file: 'dist/index.js', format: 'esm' }],
	},
	{
		input: 'src/index.js',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],
	},
])
