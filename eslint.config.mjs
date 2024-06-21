import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
	{ files: ['**/*.{ts,jsx,tsx}'] },
	{
		ignores: [
			'src/declarations.d.ts',
			'src/infrastructure/mappers/comics/comicDataTypes.ts',
		],
	},
	{ languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
	{ languageOptions: { globals: globals.browser } },
	{
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReactConfig,
];
