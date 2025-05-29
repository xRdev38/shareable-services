module.exports = {
    preset: "ts-jest/presets/js-with-ts",
    testEnvironment: "jsdom",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    transform: {
        "^.+\\.(ts|tsx)$": ["@swc/jest"],
        "^.+\\.(js|jsx)$": "babel-jest"
    },
    coverageDirectory: "./coverage",
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}",
        "!src/**/*.d.ts"
    ]
};