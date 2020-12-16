module.exports = {
  lintOnSave: false,
  devServer: {
    host: 'localhost',
    port: 8080,
    // 代理
    proxy: {
      // 访问/pay时实现拦截转发到target中
      '/api': {
        // 目标网址,内部访问到target的接口
        target: 'https://m.szsmyg.com/api',
        secure: true, // 如果是https，就配置该属性   true —— 只能在HTTPS连接中传输，HTTP连接不会传输，所以不会被窃取到Cookie的具体内容false —— HTTP、HTTPS连接都可以传输
        changeOrigin: true, // 如果是跨域访问，需要配置这个参数   false：请求头中host仍然是浏览器发送过来的host；如果设置成true：发送请求头中host会设置成target。
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}
