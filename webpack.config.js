const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
     entry: 'src/index.js',

     output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
     },

     mode: 'development',

     plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        })
     ],

     devServer: {
        static: {
            directory: path.resolve(__dirname, 'build'),
        },
        proxy: {
            '/api': 'http://localhost:3000',
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
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: require.resolve("babel-loader"),
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [{loader: "css-loader"}],
            },
            {
                test: /\.s[ac]ss$/,
                exclude: /node_modules/,
                use: [{loader: "sass-loader"}, {loader: "css-loader"}],
            },
            {
              test: /\.png|svg|jpg|gif$/,
              use: ["file-loader"],
            },
        ]
     }

};