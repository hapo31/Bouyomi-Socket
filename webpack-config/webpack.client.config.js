const path = require("path");

console.log("pwd", __dirname);

module.exports = [{
  entry: `./src/client/index.tsx`,
  output: {
    path: `${__dirname}/dest/client/`,
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