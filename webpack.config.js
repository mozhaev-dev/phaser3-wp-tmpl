const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const mode = process.env.NODE_ENV;
console.log("Mode: " + mode);

module.exports = {
  mode,
  entry: "./src/index.ts",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },
  devtool: "inline-source-map",
  plugins: [new HTMLWebpackPlugin({ template: "./src/index.html" })],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
