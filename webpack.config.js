const path = require("path");

module.exports = {
  mode: "development",
  entry: "./client/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "client/components"),
      pages: path.resolve(__dirname, "client/pages"),
      state: path.resolve(__dirname, "client/state"),
      styles: path.resolve(__dirname, "client/styles"),
      utils: path.resolve(__dirname, "client/utils")
    }
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /.css?$/,
        loader: "css-loader",
        exclude: /node_modules/
      }
    ]
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 3030
  }
};
