var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: 'source-map',
    entry: './src/jsx/main.js',
    output: {
        path: './dist',
        filename: 'app.bundle.js',
        sourceMapFilename: "[file].map"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }]
    },

    plugins: [new HtmlWebpackPlugin({
        template: 'src/template/mainpage.html'
    })]
};