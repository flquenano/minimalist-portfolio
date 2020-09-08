"use strict";
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "#inline-source-map",
  devServer: {
    port: 3000,
    publicPath: "/",
    writeToDisk: true,
    open: true,
    historyApiFallback: true,
    overlay: true
  }
});
