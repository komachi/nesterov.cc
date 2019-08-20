const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'terminal.ts'),
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    symlinks: false
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
    ]
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, 'favicon.svg'),
      favicons: {
        appName: 'Anton Nesterov',
        appDescription: 'Anton Nesterov\'s personal page', 
        developerName: 'Anton Nesterov',
        developerURL: 'https://nesterov.cc',
        background: '#fff',
        pixel_art: true
      }
    }),
    new MiniCssExtractPlugin()
  ]
};