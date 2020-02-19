/* eslint-env commonjs */
module.exports = {
  devServer: {
    disableHostCheck: true,
    host: "0.0.0.0"
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
