module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        project: "./tsconfig.json",
    },
    env: {
        es2021: true,
        node: true,
    },
    plugins: [
        '@typescript-eslint',
        'import',
    ],
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    rules: {
        indent: [2, 4],
        'max-len': ['error', { code: 140 }],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'import/extensions': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    },
    settings: {
        'import/resolver': {
            typescript: {}
        }
    },
};
