import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {
  NavbarPlugin,
  NavPlugin,
  LayoutPlugin,
  ButtonPlugin,
  ModalPlugin,
  FormPlugin,
  FormInputPlugin,
  InputGroupPlugin
} from "bootstrap-vue";

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
import "./scss/custom.scss";
// Install BootstrapVue

Vue.config.productionTip = false;
Vue.use(LayoutPlugin);
Vue.use(NavbarPlugin);
Vue.use(NavPlugin);
Vue.use(ButtonPlugin);
Vue.use(ModalPlugin );
Vue.use(FormPlugin);
Vue.use(FormInputPlugin);
Vue.use(InputGroupPlugin);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
