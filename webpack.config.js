const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./code/main.js",
  devServer: {
    static: {
      directory: path.join(__dirname, "/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|png)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
};
