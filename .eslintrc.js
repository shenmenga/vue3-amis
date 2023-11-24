module.exports = {
    root: true,
    extends: [require.resolve('@q-front-npm-configs/eslint/eslint-vue')],
    rules: {
        // 在定义对象或数组时，最后一项不能加逗号
        'comma-dangle': [
            'error',
            {
                arrays: 'never',
                objects: 'always',
                imports: 'never',
                exports: 'never',
                functions: 'never',
            }
        ],
    },
};
