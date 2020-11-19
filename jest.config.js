module.exports = {
	collectCoverageFrom: ['**/*.{ts,tsx}', '!**/node_modules/**', '!**/*.d.ts'],
	moduleFileExtensions: ['js', 'ts', 'tsx'],
	rootDir: '.',
	testEnvironment: 'node',
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
	testRegex: 'spec\\.(ts|tsx)$',
};
