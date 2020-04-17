module.exports = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    host: "localhost",
    port: 3000,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },

  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
};
