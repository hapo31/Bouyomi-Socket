const path = require("path");

module.exports = [
  {
    entry: `./src/client/index.ts`,
    output: {
      filename: "dist/client/index.js"
    },
    devtool: "source-map",
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    module: {
      loaders: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader"
        }
      ]
    }
  }
];
