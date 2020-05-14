const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  watch: true,
  devServer: {
    inline: true,
    hot: true,
    host: 'localhost',
    contentBase: path.resolve(__dirname, 'dist'),
    index: 'index.html',
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  entry: ['@babel/polyfill', './src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-modules-typescript-loader' },
          { loader: 'css-loader', options: { modules: true } },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
  ],
};
