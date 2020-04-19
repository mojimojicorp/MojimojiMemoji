const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    host: "localhost",
    port: 3000,
  },
  context: path.join(__dirname, "src"),
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  entry: ["@babel/polyfill", "./index.tsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "./src"),
        loader: ["style-loader", "css-loader"],
      },
    ],
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
};
