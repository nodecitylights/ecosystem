const esbuild = require('esbuild');
const build = esbuild.build;

build({
	entryPoints: ['src/index.js'],
	outdir: 'dist',
	format: 'cjs',
	external: [],
	sourcemap: true,
});
