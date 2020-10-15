const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy.createProxyMiddleware('/api', {
      target: 'https://www.castlery.com/api/story_bloks/social-images',
      changeOrigin: true,
      pathRewrite: {'^/api': ''}
    })
  )
}