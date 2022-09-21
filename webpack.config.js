const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: resolve(__dirname, 'build'), // 打包输出文件
        filename: '[name].[contenthash].js', // 打包文件名称
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            "@": resolve(__dirname, "./src") // 设置别名
        }
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        }, {
            test: /\.less$/,
            use: [
                {
                    loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader
                },
                {
                    loader: 'css-loader',
                },
                {
                    loader: 'less-loader',
                    options: {
                        additionalData: `@import "~@/less-vars.less";`,
                        lessOptions: {
                            // paths: [
                            //     resolve(__dirname, './src'),
                            //     resolve(__dirname, './node_modules/antd')
                            // ],
                            modifyVars:{
                                'primary-color':'#1DA57A'
                            },
                            javascriptEnabled: true
                        },
                       
                    }
                }
            ]
        }, {
            test: /\.(ts|tsx|js|jsx)$/,
            exclude: /node-modules/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        plugins: devMode ? [require.resolve('react-refresh/babel')] : [],
                    },
                },
            ],
        }, {
            test: /\.(svg|png|jpg|gif)$/,
            type: "asset/resource",
            parser: {
                dataUrlCondition: {
                    maxSize: 10 * 1024, // 小于10kb转base64位
                }
            },
            generator: {
                filename: 'static/images/[name][ext]', // 文件输出目录和命名
            }
        }, {
            test: /.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
            type: "asset",
            parser: {
                dataUrlCondition: {
                    maxSize: 10 * 1024, // 小于10kb转base64位
                }
            },
            generator: {
                filename: 'static/fonts/[name][ext]', // 文件输出目录和命名
            },
        },
        {
            test: /.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
            type: "asset",
            parser: {
                dataUrlCondition: {
                    maxSize: 10 * 1024, // 小于10kb转base64位
                }
            },
            generator: {
                filename: 'static/media/[name][ext]', // 文件输出目录和命名
            },
        },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // 设置html模板
            title: 'test-webpack-react', // 设置页面标题
            inject: true, // 自动注入静态资源
        }),
        new MiniCssExtractPlugin({
            filename: `[name].[hash:8].css`
        }), // css 代码打包分离
    ],
    cache: {
        type: 'filesystem', // 使用文件缓存
    },
}