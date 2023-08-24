// path 模块解决项目路径问题
const path = require('path')
module.exports = {
    //打包模式，一定要配置，不然打包速度慢很多
    mode: 'development', //开发模式
    // mode:'production',//生产模式

    //入口  
    entry: path.join(__dirname, './index/html'), // __dirname 是node的通用变量，代表当前项目路径
    output: {
        // 配置打包后文件存放目录
        path: path.join(__dirname, './dist'),
        // 配置打包后文件的名称
        filename: 'bundle.js'
    },
    // 监听文件改动，自动打包
    //  watch: true,
    devServer: {
        contentBase: path.join(__dirname, './'), // 指定发布后的映射的路径，./代表映射当前路劲
        compress: true, // 压缩资源
        port: 9000, // 指定服务器的端口号
        open: 'true', // 指定以哪个浏览器打开，open:true 代表以默认浏览器打开
    },
}
