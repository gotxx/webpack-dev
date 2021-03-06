const Path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/js/index.js',
    output: {
      path: `${__dirname}/dist/js`,
      filename: 'main.js'
    },
    watch: true,
    mode: "development",
    devtool: "source-map",
    devServer: {
        contentBase: Path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: false }
                    }
                ]
            },
            {
                test:/\.scss$/,
                use: ["style-loader","css-loader","sass-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "../index.html"
        })
    ]
};