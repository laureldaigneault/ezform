module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  testMatch: ['<rootDir>/**/*.test.(ts|tsx)'],
  modulePaths: ['node_modules', '<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/src/setupEnv.ts'],
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};
