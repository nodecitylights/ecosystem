import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
	{
		ignores: ['**/dist/'],
	},
	stylistic.configs.customize({
		indent: 'tab',
		quotes: 'single',
		semi: false,
		jsx: false,
	}),
	// JavaScript
	{
		files: [
			'./*.js',
			'libs/**/*.js',
		],
		rules: eslint.configs.recommended.rules,
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
		linterOptions: {
			reportUnusedDisableDirectives: 'error',
		},
	},
	// TypeScript
	{
		files: [
			'libs/node-esbuild-ts-esm/',
			'libs/node-tsc-ts-esm/',
			'libs/node-vite-ts-esm/',
			'libs/node-webpack-ts-esm/',
		],
		plugins: {
			'@typescript-eslint': tseslint.plugin,
		},
		rules: {
			...tseslint.configs.eslintRecommended.rules,
			...tseslint.configs.recommended.rules,
		},
		languageOptions: {
			globals: {
				...globals.node,
			},
			parser: tseslint.parser,
			parserOptions: {
				project: true,
			},
		},
		linterOptions: {
			reportUnusedDisableDirectives: 'error',
		},
	},
)
