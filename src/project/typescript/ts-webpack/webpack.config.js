const path = require('path')

module.exports = {
  entry: {
    index: './src/index.ts'
  },
  mode: 'development',
  output: {
    filename: 'bundle.[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['tsx', 'ts', 'js']
  }
}