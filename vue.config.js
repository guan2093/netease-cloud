const WorkboxPlugin = require("workbox-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  outputDir: "music",
  lintOnSave:false,
  configureWebpack: {
    devtool: isProd ? false : "source-map",
    devServer: {
      open: true,
      proxy: {
        "/netease-api": {
          target: "https://mu-api.yuk0.com",  //代理地址，这里设置的地址会代替axios中设置的baseURL
          pathRewrite: { "^/netease-api": "" },  //pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
          changeOrigin: true,
        },
      },
      host:'localhost',
      port: 8081
    },
    externals: isProd
      ? {
          vue: "Vue",
          "vue-router": "VueRouter",
          vuex: "Vuex",
          axios: "axios",
        }
      : {},
    plugins: [
      new WorkboxPlugin.GenerateSW({
        skipWaiting: true,
        clientsClaim: true,
      }),
    ],
  },
  css: {
    loaderOptions: {
      sass: {
        implementation: require("sass"),
        additionalData: `
          @import "~@/style/variables.scss";
          @import "~@/style/mixin.scss";
        `,
      },
    },
  },
};
