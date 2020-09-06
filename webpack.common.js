"use strict";

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js"
  },
  module: {},
  resolve: {
    alias: {
      scss: path.resolve(__dirname, "src", "sass"),
      images: path.resolve(__dirname, "src", "images"),
      components: path.resolve(__dirname, "src", "components")
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      favicon: "./images/favicon-32x32.png"
    })
  ]
};
