module.exports = {
    // 如果存在跨域则需要在此进行配置
    devServer: {
        proxy:'http://localhost:9012'
    }

}