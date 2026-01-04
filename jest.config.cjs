const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testPathIgnorePatterns: ["/node_modules/", "/.next/", "/.tmp-scripts/"],
  transformIgnorePatterns: [
    "/node_modules/(?!(mongoose|mongodb|bson)/)",
  ],
};

module.exports = createJestConfig(customJestConfig);
