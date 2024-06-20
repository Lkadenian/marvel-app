const path = require('path');

module.exports = {
	setupFilesAfterEnv: [path.resolve(__dirname, 'src/setupTests.ts')],
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
		'\\.(svg)$': '<rootDir>/config/svgTransform.js',
	},
	moduleNameMapper: {
		'\\.(css|less)$': 'identity-obj-proxy',
		'^@domain$': '<rootDir>/src/domain/$1',
		'^@context$': '<rootDir>/src/application/context/$1',
		'^@hooks/(.*)$': '<rootDir>/src/application/hooks/$1',
		'^@components$': '<rootDir>/src/presentation/components/$1',
		'^@layouts$': '<rootDir>/src/presentation/layouts/$1',
		'^@assets/(.*)$': '<rootDir>/src/presentation/assets/$1',
		'^@utils/(.*)$': '<rootDir>/src/presentation/utils/$1',
		'^@infrastructure/(.*)$': '<rootDir>/src/infrastructure/$1',
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	testMatch: ['**/src/**/*.test.(ts|tsx)'],
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.{jsx,tsx}',
		'!src/App.tsx',
		'!src/main.tsx',
		'!src/application/**',
	],
	coverageDirectory: 'coverage',
	coverageReporters: ['json', 'lcov', 'text', 'clover'],
};
