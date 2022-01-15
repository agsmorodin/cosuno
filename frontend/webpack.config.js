const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const port = process.env.PORT;

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: './src/index.tsx',
    resolve: {
        modules: ['modules', 'node_modules'],
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
        }),
    ],
    devServer: {
        host: 'localhost',
        https: false,
        port: port || 8080,
    },
};
