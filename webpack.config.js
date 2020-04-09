const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
    const isProduction = options.mode === 'production';
    return {
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'none' : 'source-map',
        watch: !isProduction,
        entry: ['./src/index.js', './src/style.css'],
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'index.js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                }, {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                }, {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                }, {
                    test: /\.html$/i,
                    loader: 'html-loader',
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin({
                template: 'index.html',
            }),
            new HtmlWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: 'style.css',
            }),
        ],
    };
};
