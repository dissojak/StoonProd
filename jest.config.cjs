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
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.stories.{js,jsx,ts,tsx}",
    "!src/**/__tests__/**",
    "!src/app/layout.tsx",
    "!src/middleware.ts",
  ],
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 4,
      lines: 5,
      statements: 5,
    },
  },
};

module.exports = createJestConfig(customJestConfig);
