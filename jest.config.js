module.exports = {
    "roots": [
      "<rootDir>/src"
    ],
    "testMatch": [
      "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest",
      "^.+\\.svg$": "jest-transformer-svg"
    },
    moduleNameMapper: {
      '^@components/(.*)$': '<rootDir>/src/components/$1',
      '^@src/(.*)$': '<rootDir>/src/$1'
    }
  }