const packageName = require('./package.json').name;

module.exports = {
  publicPath: '//localhost:5000',
  configureWebpack: {
    output: {
      library: `${packageName}`,
      libraryTarget: 'umd',
      globalObject: 'window',
    },
    devServer: {
      port: 5000,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  },
}
