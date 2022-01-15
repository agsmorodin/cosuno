module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        "project": "./tsconfig.json",
        "tsconfigRootDir": "./",
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:import/typescript',
    ],
    rules: {
        indent: [2, 4, { ignoredNodes: ['JSXElement *', 'JSXElement'] }],
        'react/jsx-indent': ['error', 4],
        'max-len': ['error', { code: 140 }],
        'jsx-a11y/anchor-is-valid': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never'
            },
        ],
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        'react/jsx-filename-extension': [1, { 'extensions': ['.tsx'] }],
        'no-use-before-define': 'off',
        "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    },
    root: true,
};
