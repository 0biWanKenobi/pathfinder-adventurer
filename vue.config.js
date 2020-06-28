/* eslint-env commonjs */
const { configureAPI } = require('./src/server/configure')

module.exports = {
  devServer: {
    disableHostCheck: true,
    host: "0.0.0.0",
    before: configureAPI
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "~@/scss/colors.scss";
        @import "~@/scss/navbar.scss";
        `
      }
    }
  }
};
