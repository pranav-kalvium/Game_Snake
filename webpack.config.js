const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    target: 'web',
    entry: path.join(__dirname, 'src', 'index.js'), // Change entry to index.js
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js', // Change output file name
        publicPath: '/', 
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules)/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html',
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'], // Allow importing files without extensions
    }
};