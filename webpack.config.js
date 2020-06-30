var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.[contenthash].js'
  },
  devtool: 'inline-source-map',
  devServer: {
       contentBase: './dist',
  },
  plugins: [
      new HtmlWebpackPlugin({
    title: '啊谢',
    template: 'src/assets/index.html'
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].[contenthash].css',
    ignoreOrder: false, 
  }),
],
  module: {
    rules: [
      {
        test: /\.css$/i,
        // use: [
        //     {
        //       loader: MiniCssExtractPlugin.loader,
        //       options: {
        //         publicPath: '../',
        //       },
        //     },
        //     'css-loader',
        //   ],
          use: ['style-loader', 'css-loader'],
      },
    ],
  }
};

