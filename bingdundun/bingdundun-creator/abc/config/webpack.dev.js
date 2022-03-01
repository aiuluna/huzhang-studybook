const {merge} = require ('webpack-merge');
const UglifyJSPlugin = require ('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const webpack = require ('webpack');
const common = require ('./webpack.common.js');
const moduleFederationConfig = require('./moduleFederationConfig.js');

module.exports = merge (common, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: '[name].js',
  },
  plugins: [
    new UglifyJSPlugin ({
      sourceMap: true,
    }),
    new webpack.DefinePlugin ({
      'process.env.NODE_ENV': JSON.stringify ('production'),
    }),
    new MiniCssExtractPlugin ({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
    ...moduleFederationConfig('production')
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 37.5,
              remPrecision: 8,
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
    ],
  },
});
