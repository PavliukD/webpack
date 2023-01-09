const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: false
        }),
        new MiniCssExtractPlugin({
            attributes: {
                id: "target",
                "data-target": "example",
            },
        })
    ],
    devServer: {
        port: 8080,
        open: true,
    }
};