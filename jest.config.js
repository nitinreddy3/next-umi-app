const config = {
  verbose: true,
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    /**
    To make sure that Jest is able to identify the pdfjs module
    */
    'pdfjs-dist': '<rootDir>/node_modules/pdfjs-dist/legacy/build/pdf.js',
  },
  modulePathIgnorePatterns: ['<rootDir>/src/.umi'],
  collectCoverage: true,
  globals: {
    TOKEN_NAME: 'b2c_token',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testPathIgnorePatterns: ['<rootDir>/src/__tests__/mock-data/*'],
};

module.exports = config;
