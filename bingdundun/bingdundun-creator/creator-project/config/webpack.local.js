const path = require('path')
const entryHelp = require('../help/entryHelp')
const entrys = require('./entrys')
const webpack = require('webpack')
const router = require('./router')
const moduleFederationConfig = require('./moduleFederationConfig.js')

/**
 * @type {
 * | 'test1'
 * | 'test2'
 * | 'test3'
 * | 'test4'
 * | 'test5'
 * | 'test6'
 * | 'stable'
 * | 'integration'
 * | 'pre'
 * }
 */
const prefix = 'test1'

const token = '4612be1d-781b-4852-9186-3291f89ea51b'

module.exports = {
  entry: entryHelp.buildEntry(entrys),
  output: {},
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    // new webpack.NamedModulesPlugin (),
    ...entryHelp.buildTemplateEntry(entrys),
    new webpack.HotModuleReplacementPlugin(),
    ...moduleFederationConfig(''),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)/,
        exclude: /node_modules/,
        use: ['swc-loader', './loader/loader1.js'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
      {
        test: /\.(css|scss|less)$/,
        use: [
          'style-loader',
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
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, '..', 'src'),
    },
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    // 'react-router-dom': 'ReactRouterDOM'
  },
  devServer: {
    contentBase: path.resolve(__dirname, '..'),
    publicPath: path.resolve(__dirname, '..', '/', router.path),
    compress: true,
    port: 9001,
    host: '0.0.0.0',
    open: true,
    useLocalIp: true,
    openPage: `${router.path}${router.routes[0].path}.html`,
    proxy: {
      '/proxy': {
        target: `http://${prefix}.myweimai.com/`,
        pathRewrite: { '^/proxy': '' },
        changeOrigin: true,
        onProxyReq: req => {
          req.setHeader('x-weimai-token', token)
        },
      },
      '/saasApi': {
        target: `http://saas${prefix}.myweimai.com/`,
        pathRewrite: { '^/saasApi': '' },
        changeOrigin: true,
        onProxyReq: req => {
          req.setHeader('x-weimai-token', token)
        },
      },
    },
  },
  optimization: {
    moduleIds: 'named',
  },
}
