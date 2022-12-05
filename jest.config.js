export default {
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/types/**/*"
  ],
  testEnvironment: "jsdom",
};
