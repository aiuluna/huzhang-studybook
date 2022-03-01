const path = require('path')
const entryHelp = require('../help/entryHelp')
const entrys = require('./entrys')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const minimist = require('minimist')

const { timestamp } = minimist(process.argv.slice(2))

module.exports = {
  entry: entryHelp.buildEntry(entrys),
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
    environment: {
      arrowFunction: false,
    },
  },
  target: ['web', 'es5'],
  optimization: {
    splitChunks: {
      chunks: 'async', //默认作用于异步chunk，值为all/initial/async/function(chunk),值为function时第一个参数为遍历所有入口chunk时的chunk模块，chunk._modules为chunk所有依赖的模块，通过chunk的名字和所有依赖模块的resource可以自由配置,会抽取所有满足条件chunk的公有模块，以及模块的所有依赖模块，包括css
      minSize: 30000, //表示在压缩前的最小模块大小,默认值是30kb
      minChunks: 1, // 表示被引用次数，默认为1；
      maxAsyncRequests: 5, //所有异步请求不得超过5个
      maxInitialRequests: 3, //初始话并行请求不得超过3个
      automaticNameDelimiter: '~', //名称分隔符，默认是~
      name: false, //打包后的名称，默认是chunk的名字通过分隔符（默认是～）分隔
      cacheGroups: {
        //设置缓存组用来抽取满足不同规则的chunk,下面以生成common为例
        common: {
          name: `${timestamp}/common`, //抽取的chunk的名字
          test: /[\\/]node_modules[\\/] || src\//,
          chunks: 'all',
          priority: 10, //优先级，一个chunk很可能满足多个缓存组，会被抽取到优先级高的缓存组中
          minChunks: 2, //最少被几个chunk引用
          reuseExistingChunk: true, //  如果该chunk中引用了已经被抽取的chunk，直接引用该chunk，不会重复打包代码
          enforce: true, // 如果cacheGroup中没有设置minSize，则据此判断是否使用上层的minSize，true：则使用0，false：使用上层minSize
        },
      },
    },
  },
  plugins: [
    ...entryHelp.buildTemplateEntry(entrys),
    new CleanWebpackPlugin({
      path: 'dist',
    }),
  ],
  // externals: {
  //   react: 'React',
  //   'react-dom': 'ReactDOM'
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: 'babel-loader',
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
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/,
        use: ['xml-loader'],
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
}
