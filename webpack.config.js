var webpack = require('webpack')

module.exports = {
  entry: './assets/js/entry.js',
  output: {
    path: __dirname + '/assets/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'}
    ]
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by chenpeiqing')
  ]
}
