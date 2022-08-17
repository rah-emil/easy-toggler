module.exports = {
    root: true,
    parser: '@babel/eslint-parser',
    parserOptions: {
        sourceType: 'module',
    },
    env: {
        browser: true,
    },
    extends: [
        'eslint-config-standard',
        'eslint-config-prettier'
    ],
    plugins: [
        'eslint-plugin-prettier',
        'eslint-plugin-standard'
    ],
    rules: {
        'prettier/prettier': ['warn', {
            'singleQuote': true
        }],
        'arrow-parens': 0,
        'generator-star-spacing': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    },
};
