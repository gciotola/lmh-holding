const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const paths = require("./paths");
const webpackBase = require("./config.base");

module.exports = {
  ...webpackBase,
  mode: "production",
  plugins: [
    ...webpackBase.plugins,
    new HtmlWebpackPlugin({
      inject: true,
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
      template: path.resolve(paths.sourceFolder, "index.html")
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          enforce: true
        },
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};
