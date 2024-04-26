import { build } from 'esbuild'

build({
	entryPoints: ['src/index.js'],
	outdir: 'dist',
	format: 'esm',
	external: [],
	sourcemap: true,
})
