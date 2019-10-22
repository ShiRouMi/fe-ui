const path = require("path")
function resolve(dir) {
  return path.join(__dirname, "..", dir)
}
module.exports = {
  assetsDir: "./",
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete("prefetch")
    config.resolve.alias.set("@$", resolve("src"))
    // 关闭包大小告警提示
    config.performance.set("hints", false)
  },
  configureWebpack: {
    performance: {
      hints: false
    }
  },
  devServer: {
    open: true
  }
}
