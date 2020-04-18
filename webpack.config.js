const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

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
                    test: /\.(png|jpeg|gif|svg|mp3|jpg)$/i,
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
            new CopyPlugin([
                {
                    from: path.join(__dirname, 'src/img'),
                    to: path.join(__dirname, 'dist/src/img'),
                },
                {
                    from: path.join(__dirname, 'src/audio'),
                    to: path.join(__dirname, 'dist/src/audio'),
                },
            ]),
            new HtmlWebpackPlugin({
                template: 'index.html',
            }),
            new MiniCssExtractPlugin({
                template: './src/style.css',
                filename: 'style.css',
            }),
        ],
    };
};
