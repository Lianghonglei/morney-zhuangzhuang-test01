const path = require('path')

module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
        const dir = path.resolve(__dirname, 'src/assets/icons')
        //vue 把webpack给封装成了一个config的一个变量暴露给我们
        config.module
            .rule('svg-sprite')//添加一个svg规则
            .test(/\.svg$/)//匹配以svg结尾的文件
            .include.add(dir).end()//该规则只作用于 包含dir--icons目录
            .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract: false}).end()
        config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
        config.module.rule('svg').exclude.add(dir) //其他svg loader 排除icons目录
    }
}
