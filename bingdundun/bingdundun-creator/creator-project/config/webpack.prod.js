const {merge} = require ('webpack-merge');
const dev = require ('./webpack.dev.js');

module.exports = merge (dev, {
  mode: 'production',
  output: {
    publicPath: `//cdn.myweimai.com/assets/platform/doctor-recipe/`
  }  
});
