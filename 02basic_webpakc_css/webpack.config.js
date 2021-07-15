const path = require('path');

module.exports={
    entry:'./src/index.js',//入口
    output:{
        path:path.resolve(__dirname,"./build"),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/, //使用正则表达式匹配
                //loader 的语法糖
                // loader:'css-loader'
                //使用loader时，一个loader可能搞不定时这个时候就使用use
                use :[
                    // {loader:'css-loader'}
                    'style-loader',
                    'css-loader',
                    //使用postcss-loader，options为该loader的相关配置
                    // {
                    //     loader:'postcss-loader',
                    //     options:{
                    //         postcssOptions:{
                    //             plugins:[
                    //                 require('autoprefixer')
                    //             ]
                    //         }
                    //     }
                    // }
                    'postcss-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    }
}