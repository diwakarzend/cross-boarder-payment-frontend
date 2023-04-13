const webpack = require("webpack");
const path = require("path");
const loaders = require("./webpack.loaders.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || "8893";

module.exports = {
  entry: ["./src/index.js"],
  devtool: process.env.WEBPACK_DEVTOOL || "eval-source-map",
  output: {
    path: path.resolve(__dirname, "public/build"),
    filename: "[name]-[hash].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  alias: {
    public: path.join(__dirname, "./public"),
  },
  module: {
    loaders,
  },
  devServer: {
    contentBase: "./public",
    // do not print bundle build stats
    noInfo: true,
    // enable HMR
    hot: true,
    // embed the webpack-dev-server runtime into the bundle
    inline: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    port: PORT,
    host: HOST,
    disableHostCheck: true,
    proxy: [
      {
        context: ["/api/"],
        //  target:
        // target: "https://vendor-apiservice.pay2mobiles.com:8443",
        target: "http://143.110.188.1:8083",
        // secure: false,
        // changeOrigin: true,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      inject: "body",
    }),
  ],
};
