const goods = require('./data/goods.json')
const seller = require('./data/seller.json')
const ratings = require('./data/ratings.json')

module.exports = {
    outputDir: 'dist', // build输出目录
    assetsDir: 'assets', // 静态资源目录(js, css, img, fonts)
    lintOnSave: false, // 是否开启eslint保存检测, 有效值: true || false || 'error'
    publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
    devServer: {
        open: true, // 是否启动完项目后, 在浏览器打开
        host: '127.0.0.1',
        port: 8989,
        https: false,
        proxy: {
            // 配置跨域
            '/api': {
                target: 'http://127.0.0.1:5000/api/', // 端口不同, 需要跨域
                ws: true, // 开启跨域
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before(app) {
            // http://127.0.0.1:8989/api/goods
            app.get('/api/goods', (req, res) => {
                res.json(goods)
            })

            // http://127.0.0.1:8989/api/seller
            app.get('/api/seller', (req, res) => {
                res.json(seller)
            })
            
            // http://127.0.0.1:8989/api/ratings
            app.get('/api/ratings', (req, res) => {
                res.json(ratings)
            })
        }
    }
}