const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');


//webpack NEEDS an absolut epath to the distribution folder
// and that is why we use __dirname
//this file inherits settinga lready seen in webpack.common.js
//therefore, you won't see an entry property here bcause its defined
//already in webpack.common.js
//for example, we don't need to hash shit for development
module.exports = merge.smart(common, {
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        overlay: true,
        port: 3000
    },
    plugins: [
        new Dotenv({
            path: './.env.development'
        })
    ]
});