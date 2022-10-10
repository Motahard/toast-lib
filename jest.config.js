const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
    preset: 'ts-jest',
    "roots": [
      "<rootDir>/src"
    ],
    moduleFileExtensions: ['tsx','ts', 'js', 'json', 'node'],
    "testMatch": [
      "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest",
      "^.+\\.svg$": "jest-transformer-svg"
    },
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/' } )
  }