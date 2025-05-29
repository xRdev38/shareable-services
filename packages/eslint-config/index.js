module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'jest',
        'unicorn',
        'promise',
        'import',
        'sonarjs',
        'jsdoc',
        'prettier'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:unicorn/recommended',
        'plugin:promise/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:sonarjs/recommended',
        'plugin:jsdoc/recommended',
        'plugin:prettier/recommended'
    ],
    env: {
        browser: true,
        node: true,
        es2021: true,
        jest: true
    },
    rules: {
        'prettier/prettier': 'error',
        'no-console': 'warn',
        'no-debugger': 'error'
    }
};
