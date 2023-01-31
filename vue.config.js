const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')


module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  //代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
      },
    },
  },
  

  configureWebpack: {
    plugins: [new NodePolyfillPlugin()]
  },

})





                                                                                                                          

