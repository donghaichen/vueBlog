module.exports = {
    devServer: {
        proxy: {
            '/sell': {
                target: 'https://blog.mengniang.tv/',   // 需要请求的地址
                changeOrigin: true,  // 是否跨域
                pathRewrite: {
                    '^/sell': '/'  // 替换target中的请求地址，也就是说，在请求的时候，url用'/proxy'代替'http://ip.taobao.com'
                }
            }
        }
    }
}
