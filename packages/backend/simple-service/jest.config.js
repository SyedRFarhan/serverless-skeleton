module.exports = {
  roots: ['<rootDir>'],
  testMatch: ['**/*.test.ts'],
  testPathIgnorePatterns: ['<rootDir>/cdk.out/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      diagnostics: {
        warnOnly: true,
      },
    },
  },
};
