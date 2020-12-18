module.exports = {
	extends: ['@bigbang/eslint-config'],
	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx'],
			extends: ['@bigbang/eslint-config/ts'],
			parserOptions: {
				project: './tsconfig.json',
				tsconfigRootDir: __dirname,
			},
			settings: {
				'import/resolver': {
					typescript: {
						directory: __dirname,
					},
				},
			},
			rules: {
				'no-console': 'off',
			},
		},
	],
};
