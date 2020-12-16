module.exports={
    lintOnSave:false,
    devServer: {
        host: "localhost",
        port: 8080,
        // 代理
        proxy: {
          // 访问/pay时实现拦截转发到target中
          "/api": {
            // 目标网址,内部访问到target的接口
            target: "https://m.szsmyg.com/api",
            secure: true,
            changeOrigin: true,
            pathRewrite: {
              "/api": "",
            },
          },
        },
        
      },
}