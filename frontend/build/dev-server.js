'use strict'
require('./check-versions')()

// process.env.NODE_ENV

const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.dev.conf')
const WebpackDevServer = require('webpack-dev-server')

console.log('> Starting dev server...')

var server = new WebpackDevServer(webpack(webpackConfig), {
  // contentBase: staticPath,
  publicPath: webpackConfig.output.publicPath,
  quiet: true,
  hot: true,
  inline: true,
  historyApiFallback: true,
  headers: { 'Access-Control-Allow-Origin': '*' }
})

server.listen(config.dev.port, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err)
  }

  console.log(`> dev server started at port ${config.dev.port}`)
})
