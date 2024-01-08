module.exports = {
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{spec.tsx,test.tsx}'],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	globals: {
		'ts-jes': {
			tsconfig: 'tsconfig.jest.json',
		},
	},
};
