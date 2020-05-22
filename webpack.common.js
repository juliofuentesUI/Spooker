const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



//webpack NEEDS an absolut epath to the distribution folder
// and that is why we use __dirname
module.exports = {
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Fashion App',
            template: `${__dirname}/src/template.html`,
            filename: 'index.html',
            minify: false,
            favicon: './src/assets/favicon/favicon3.ico'
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.module\.css$/,
                exclude: /node_modules/,
                use: [ 
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]',
                            }
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: [/node_modules/, /\.module\.css$/],
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.(svg|jpe?g|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: "[name].[hash].[ext]",
                    outputPath: 'images'
                }
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};