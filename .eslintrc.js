module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'airbnb',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'no-console': [1, { allow: ['warn', 'error'] }],
        'import/no-unresolved': 'off',
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx'],
            },
        ],
        'react/jsx-props-no-spreading': 'off',
        'react/display-name': 'off',
        'prettier/prettier': ['error', { singleQuote: true }],
        'react/jsx-fragments': 'off',
        'react/prop-types': 'warn',
        'consistent-return': 'warn',
        'import/prefer-default-export': 'off',
        'react/require-default-props': 'off',
        'react/jsx-curly-newline': 'off',
        'react/jsx-wrap-multilines': [
            'error',
            {
                prop: 'ignore',
            },
        ],
        'react/jsx-one-expression-per-line': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
    },
};
