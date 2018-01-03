const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = [{
  target: "node",
  externals: [nodeExternals()],
  entry: `./src/server/index.ts`,
  output: {
    path: `${__dirname}/dest/server/`,
    filename: "index.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      }
    ]
  }
}];