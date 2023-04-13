module.exports = {
  resolve: {
      extensions: ['.js', '.jsx']
  },
  entry: './index.js',
  output: {
      filename: 'bundle.js'
  },
  module: {
      rules : [
          { test: /\.js?/, loader: 'bable-loader', exclude: /node_modules/ },
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
      
  }
}