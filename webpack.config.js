const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
     entry: 'src/index.js',

     output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
     },

     mode: 'development',

     plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
     ],

     devServer: {
        host: 'localhost',
        port: 3000,
        static: {
            directory: path.resolve(__dirname, 'dist'),
            publicPath: '/',
        },
        hot: true,
        historyApiFallback: true,

        proxy: {
            '/api/': {
                target: 'http://localhost:3000/',
                secure: false,
            },
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
     },

     resolve: {                                  //changes how modules are resolved
        modules: [__dirname, "node_modules"],// module resolution: process the compiler uses to figure out what an import refers to 
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
     },

     module: {
        rules: [
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                loader: require.resolve("babel-loader"),
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"],
            },
            {
              test: /\.png|svg|jpg|gif$/i,
              use: ["file-loader"],
            },
        ]
     }

};