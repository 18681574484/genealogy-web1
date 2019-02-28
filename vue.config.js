const path = require('path')
const resolve = dir => {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/mobile/' : '/',
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.json', '.vue'],
        },
    },
    filenameHashing: false,
    chainWebpack: config => {
        config.resolve.alias.set('@', resolve('src')).set('_c', resolve('src/components'))
    },
    productionSourceMap: true
}