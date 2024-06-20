module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
	],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'prettier/prettier': ['error', {}, { usePrettierrc: true }],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
