const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const paths = require("./paths");
const webpackBase = require("./config.base");
const webpack = require("webpack");

module.exports = {
  ...webpackBase,
  mode: "development",
  entry: [
    "react-hot-loader/patch",
    path.resolve(paths.sourceFolder, "index.js")
  ],
  resolve: {
    ...webpackBase.resolve,
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  // performance: {

  devServer: {
    compress: false,
    port: 8088
    // enable https navigation on localhost, requires a self signed certificate
    // https: true
  },
  plugins: [
    ...webpackBase.plugins,
    new webpack.DefinePlugin({
      __DEV__: true,
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(paths.sourceFolder, "index.html")
    })
  ]
};
