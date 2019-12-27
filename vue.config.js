const path = require('path'); //引入path模块
const resolve = (dir) => path.join(__dirname, dir); // 将文件组成绝对路径

module.exports = {
    chainWebpack: config => {
        //添加别名
    config.resolve.alias
    .set('@',resolve('src'))
    .set('views',resolve('src/views'))
    .set('@components',resolve('src/components'))
    .set('@api',resolve('src/api'))
    .set('@utils',resolve('src/utils'))
    },
    devServer: {
        // overlay: { // 让浏览器 overlay 同时显示警告和错误
        //   warnings: true,
        //   errors: true
        // },
        // open: false, // 是否打开浏览器
        host: "localhost",
        port: "8080", // 代理断就
        https: false,
        hotOnly: true, // 热更新
        proxy: {
            "/api": {
            target:
                "http://guojiang.ibrand.cc/", // 目标代理接口地址?
            secure: false,
            changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
            ws: true, // 是否启用websockets
            pathRewrite: {
                "^/api": ""
            }
            }
        }
    },
    lintOnSave: true,
    css: {
        loaderOptions: {
        postcss: {
                plugins: [
                require('postcss-pxtorem')({
                    rootValue : 16, // 换算的基数
                    selectorBlackList  : [], // 忽略转换正则匹配项
                    propList   : ['*'],
                }),
                ]
            }
        }
    },
    pwa: {
        iconPaths: {
            favicon32: 'img/xr.png',
            favicon16: 'img/xr.png',
            appleTouchIcon: 'img/xr.png',
            maskIcon: 'img/xr.png',
            msTileImage: 'img/xr.png'
        }
    }
}
