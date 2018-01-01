const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = [{
  entry: {
    "client/index": "./src/client/index.tsx"
  },
  output: {
    path: `${__dirname}/dist/`,
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
  },
  plugins: [
    new HotModuleReplacementPlugin()
  ]
}]