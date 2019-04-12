module.exports = ({ file, options, env }) => ({

    parser: 'postcss-comment', // スラッシュコメントアウトを/**/に変換する

    plugins: {

        // @importを使えるようにする、先頭に設置
        'postcss-import': {},

        // cssnextを利用できるようにする
        'postcss-cssnext': {
            // grid: true,
            browsers: ['last 2 versions']
        },

        // @define-mixin を利用できるようにする
        'postcss-mixins': {},

        // @define-function、@callFn を利用できるようにする
        'postcss-define-function': {},

        // $の変数を使えるようにする
        'postcss-simple-vars': { silent: true },

        // forやifを使えるようにする
        // postcss-advanced-variablesの方が良い？
        // 'postcss-conditionals': {},

        // forやifを使えるようにする
        'postcss-advanced-variables': {},

        // forを使えるようにする
        // 'postcss-for': {},

        // media query をまとめる
        'css-mqpacker': {},

        // sassタイプのnestが使える
        'postcss-nested': {},

        // postcss-cssnextあるときはこれいらない
        // 'postcss-calc': {},

        // autoprefixer
        // postcss-cssnextあるときはこれいらない
        // 'autoprefixer': {
        //     // grid: true,
        //     browsers: ['last 2 versions']
        // },

        'postcss-functions': {
            functions: {
                pxtovmin: (value) => {
                    const basePx = 375 * 0.01;
                    return `${value / basePx}vmin`;
                },
            }
        },

        'cssnano': env === 'production' ? options.cssnano : false
    }

})
