module.exports = {
    projects: [{
        collectCoverage: true,
        collectCoverageFrom: [
            'src/**/*.{js,jsx}',
            '!**/node_modules/**'
        ],
        bail: true,
        verbose: false,
        displayName: 'tests',
        testMatch: [
            '<rootDir>/tests/*.js',
            '<rootDir>/tests/**/*.js',
        ],
        testPathIgnorePatterns: [
            '<rootDir>/src/temp/',
        ],
    },
    {
        displayName: 'LINT',
        runner: 'jest-runner-eslint',
        testPathIgnorePatterns: [
            '/examples/',
            '/node_modules/',
            '/__eslint__/',
            '/__fixtures__/',
            '<rootDir>/src/temp/',
        ],
        testMatch: [
            '<rootDir>/src/*.js',
            '<rootDir>/src/**/*.js',
        ],
    },
    ],
};