const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//BECAUSE were inhertinga  base set of config settings from
//webpack.config.js (the common file between webpack dev and prod)
//THIS file will only have settings that are PROD specific! 
module.exports = merge.smart(common, {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'none',
    plugins: [
        new CleanWebpackPlugin(),
        new Dotenv({
            path: './.env.production'
        })
    ],
    module: {
        rules: [
            {
                test: /\.module\.css$/,
                exclude: /node_modules/,
                use: [ 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]__[hash:base64:5]',
                            }
                        }
                    }
                ]  
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
});    