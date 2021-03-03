const SystemJSPublicPathWebpackPlugin = require("systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin");

module.exports = {
  configureWebpack: {
    plugins: [
      new SystemJSPublicPathWebpackPlugin({
        rootDirectoryLevel: 1,
        systemjsModuleName: "@vue-mf/new-vue-ts"
      })
    ],
  },
  lintOnSave: false,
  configureWebpack: {
    externals: ["vue", "vue-router", /^@vue-mf\/.+/],
  },
  filenameHashing: false,
};
