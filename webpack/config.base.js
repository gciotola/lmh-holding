const paths = require("./paths");
// const path = require("path");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpg|gif|eot|ttf|woff|woff2|ico)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "./static"
        }
      },
      {
        test: /\.svg$/,
        loader: "react-svg-loader"
      }
    ]
  },
  resolve: {
    modules: [paths.sourceFolder, "node_modules"],
    extensions: [".js", ".jsx", ".svg"]
  },
  plugins: [
    // new CopyWebpackPlugin([
    //   { from: path.resolve(paths.sourceServiceWorkers, "sw.js"), to: "sw.js" }
    // ])
  ],
  target: "web"
};
