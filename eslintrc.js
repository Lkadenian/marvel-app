module.exports = {
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	extends: [
		'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier
		'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
		'plugin:react-hooks/recommended', // Enforces the Rules of Hooks
	],
	parserOptions: {
		ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
		ecmaFeatures: {
			jsx: true, // Allows for the parsing of JSX
		},
	},
	rules: {
		'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Includes .prettierrc.js rules
	},
	settings: {
		react: {
			version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
		},
	},
};
