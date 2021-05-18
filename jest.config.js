module.exports = {
    testMatch: ["**/tests/**/*.test.js"],
    testPathIgnorePatterns: ["/node_modules/"],
    moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
    transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest'
    },
    testEnvironment: 'node',
}