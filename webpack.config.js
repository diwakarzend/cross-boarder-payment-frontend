const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");
const TerserPlugin = require("terser-webpack-plugin");

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || "3008";

module.exports = {
  entry: ["./src/index.js"],
  devtool: process.env.WEBPACK_DEVTOOL || "eval-source-map",
  output: {
    path: path.resolve(__dirname, "public/build"),
    filename: "[name]-[fullhash].js",
    publicPath: "/",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|otf|woff2|woff|svg|gif|png|jpg)$/,
        use: [{ loader: "file-loader" }],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  optimization: {
    minimize: false,
    runtimeChunk: "single",
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        },
      }),
    ],
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        main: {
          name: "main",
          chunks: "initial",
          minChunks: 2,
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
        // vendor: {
        //   test: /[\\/]node_modules[\\/]/,
        //   name(module) {
        //     // get the name. E.g. node_modules/packageName/not/this/part.js
        //     // or node_modules/packageName
        //     const packageName = module.context.match(
        //       /[\\/]node_modules[\\/](.*?)([\\/]|$)/
        //     )[1];

        //     // npm package names are URL-safe, but some servers don't like @ symbols
        //     return `npm.${packageName.replace("@", "")}`;
        //   },
        // },
      },
    },
  },
  devServer: {
    // contentBase: "./public",
    // do not print bundle build stats
    // noInfo: true,
    // enable HMR
    // hot: true,
    // embed the webpack-dev-server runtime into the bundle
    // inline: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    port: PORT,
    host: HOST,
    // disableHostCheck: true,
    proxy: [
      {
        context: ["/api/"],
        // target: "http://143.110.188.1:8083",
        target: "http://13.126.244.49:8083/payment-finance-service/",
        secure: false,
      },
      {
        context: ["/admin/", "/chatbox/"],
        target: "http://13.126.244.49:8085/support-service/",
        secure: false,
      },
      // {
      //   context: ["/api/**"],
      //   // target: "https://api-service.texta.info:8443",
      //   target: "https://api-service.qpay.net.in:8443",
      //   secure: false,
      //   changeOrigin: true,
      // },
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
