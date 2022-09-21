const {
    merge
} = require('webpack-merge');

const baseConfig = require('./webpack.config')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'); // 错误提示
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin'); // react热更新插件


module.exports = merge(baseConfig,{
    mode:'development',
    devtool: "eval-cheap-module-source-map",
    devServer: {
        host:'127.0.0.1',
        hot: true,
        static: true,
        port: '9527',
        open: true,
        compress: true, // 开启gzip压缩 针对开发模式下的文件
        historyApiFallback: true, // 防止 history 路由刷新后空白
    },
    plugins:[
        new FriendlyErrorsWebpackPlugin(),
        new ReactRefreshWebpackPlugin(), // 添加热更新插件
        // require.resolve('react-refresh/babel')
    ]
})