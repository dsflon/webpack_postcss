module.exports = ({ file, options, env }) => ({

    parser: 'postcss-comment',

    plugins: {
        'postcss-import': {},
        'postcss-cssnext': {},
        'postcss-mixins': {},
        'postcss-define-function': {},
        // 'postcss-calc': {}, //cssnextあればいらない
        'postcss-simple-vars': { silent: true },
        // 'postcss-conditionals': {}, //postcss-advanced-variablesあればいらない
        'postcss-advanced-variables': {},
        'css-mqpacker': {},
        'postcss-nested': {},
        // 'autoprefixer': { // postcss-cssnextあるときはこれいらない
        //     // grid: true,
        //     browsers: ['last 2 versions']
        // },
        'postcss-reporter': {},
        'cssnano': env === 'production' ? options.cssnano : false
    }

})
