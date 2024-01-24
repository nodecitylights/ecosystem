import { resolve } from 'node:path';

import { defineConfig }	from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.js'),
			formats: ['cjs'],
			fileName: () => 'index.cjs',
		},
	},
	plugins: [
		dts({
			insertTypesEntry: true,
		}),
	],
})
