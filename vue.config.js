const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/assets/styles/theme.less')]
    })
}

module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('assets', resolve('./src/assets'))
      .set('styles', resolve('./src/assets/styles'))
    // 自动化导入文件 (用于颜色、变量、mixin……)
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type =>
      addStyleResource(config.module.rule('less').oneOf(type))
    )
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8084',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
}
