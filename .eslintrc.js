module.exports = {
  extends: [
		'react-app',
		'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
	],
  rules: {
    'no-empty': 'off',
    'no-console': 'warn',
    'no-useless-escape': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
  }
};
