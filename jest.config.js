module.exports = {
    "cacheDirectory": "<rootDir>/.ci/jest_cache",
    "roots": [
        "./src",
        // uncomment if mocking a node_module
        // "./__mocks__"
    ],
    testMatch: [
        "**/__tests__/**/*.+(ts|tsx|js)"
    ],
    "coverageDirectory": ".ci/coverage_report",
    "collectCoverageFrom": [
        "./src/**/*.{ts,tsx}",
        "!./src/**/*.d.ts"
    ],
    "coverageThreshold": {
        "global": {
            "branches": 75,
            "functions": 75,
            "lines": 75,
            "statements": 75
        }
    },
    // this may cause issues down the road
    // indended to fix the issue of all mock directories being checked and only checking the ones in the local path
    modulePathIgnorePatterns: ["<rootDir>/.*/__mocks__"]
};
