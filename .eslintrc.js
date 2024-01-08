module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
		'prettier',
	],
	plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks'],
	rules: {
		'prettier/prettier': 'error',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
	},
	env: {
		browser: true,
		es2021: true,
		jest: true,
		node: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
