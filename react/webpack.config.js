var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
// var webpack = require('webpack')
module.exports = {
    entry: {
        app: path.join(__dirname, './src/main.js'),
        react: ['react'],  //第三方包的名字
        reactDOM: ['react-dom']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.scss/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(jpg|gif|png|bmp)$/, use: 'url-loader' }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'  //进一步压缩JS 但效果不明显
        }),
        new webpack.optimize.UglifyJsPlugin({
            // commpress:{
            //     warnings:false  //移除警告
            // }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['react', 'reactDOM'],
            filename: '[name]/[name].js'//分离后第三方包的名字
        }),
        new htmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html"),//模版
            filename: "index.html", //文件名
            minify: {
                collapseWhitespace: true, // 合并空白字符
                removeComments: true, // 移除注释
                removeAttributeQuotes: true // 移除属性上的引号
            }

        }),
        new CleanWebpackPlugin(['dist'])
    ]
    /*分离第三方包
    entry:{
        app:path.join(__dirname,'./src/main.js'),
        vendors:['']  //第三方包的名字
    },
    pluguns:[
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendors',
            filename:''//分离后第三方包的名字
        }),
        //压缩JS
        new webpack.optimize.UglifyJsPlugin({
            commpress:{
                warning:false     //移除警告
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':'"production"'  //进一步压缩JS 但效果不明显
        })
    ]
     分离css
    # npm i -D extract-text-webpack-plugin
    var ExtractTextWebpackPlugin=require('extract-text-webpack-plugin')
    module:{
        rules:[
            {test:/\.css#/,use:ExtractTextWebpackPlugin.extract({
                fallback:'style-loader',
                use:'css-loader',
                publicPath:'../'   //公共路径
            })},
            {test:/\.scss#/,use:ExtractTextWebpackPlugin.extract({
                fallback:'style-loader',
                use:['css-loader','scss-loader],
                publicPath:'../'   //公共路径
            })}

        ]
    },
    plugins:[
        new ExtractTextWebpackPlugin('css/styles.css') // 分离css的路径
    ]
    压缩分离的css
    # npm i optimize-css-assets-webpack-plugin -D
    var OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
    plugins:[
        new OptimizeCssAssetsWebpackPlugin()
    ]
    less 
    # npm i less-loader less -D 
    module:{
        rules:[
            {test:/\.less$/,use:[
                {loader:'style-loader'},
                {loader:'css-loader'},
                {loader:'less-loader'},
            ]
        ]
    }
    //分离多个第三方包到多个文件
         entry:{
            app:path.join(__dirname,'./src/main.js'),
            react:['react'],  //第三方包的名字
            reactDOM:['react-dom']
        },
        plugins:[new webpack.optimize.CommonsChunkPlugin({
            name:['react','reactDOM'],
            filename:'[name]/[name].js'//分离后第三方包的名字
        })]
    */
}