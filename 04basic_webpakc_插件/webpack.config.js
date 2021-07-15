const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')
// import {Configuration} from 'webpack'
const {DefinePlugin} = require('webpack')

/**
 * @type {Configuration}
 */
module.exports = {
    entry: './src/index.js',//入口
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/, //使用正则表达式匹配
                //loader 的语法糖
                // loader:'css-loader'
                //使用loader时，一个loader可能搞不定时这个时候就使用use
                use: [
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
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // outputPath:'img', //output可以不要，将name设置成img/
                            name: 'img/[name]_[hash:6].[ext]',
                            limit: 100 * 1024

                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        //对应数组，一个个插件对象
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            //可以创建index模版,htmlWebpackPlugin会根据模版进行打包
            //可以自定义模版,字符串内放路径
            // template:''
        }),
        //定义baseURl,需要用双引号或者单引号,
        new DefinePlugin({
            BASE_URL:'"./"'
        }),
        new copyWebpackPlugin({
            //匹配
            patterns:[
                {
                    //从哪复制
                    from:'public',
                    to:"./",
                    //忽略
                    globOptions:{
                        ignore:[
                            "**/index.html"
                        ]
                    }
                }
            ]
        })
    ]



}