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
     resolve: {                                        //changes how modules are resolved
        modules: [__dirname, "src", "node_modules"],   // module resolution: process the compiler uses to figure out what an import refers to 
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"]
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
                use: ["style-loader", "css-loader"],
            },
            {
              test: /\.png|svg|jpg|gif$/,
              use: ["file-loader"],
            },
        ]
     }

};