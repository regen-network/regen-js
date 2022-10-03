module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  testTimeout: 10000,
  verbose: true,
  setupFilesAfterEnv: ["jest-expect-message"],
};
