import Vue from "vue"; //here we register plugins in our app entry point
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
//import css files (best done here?)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

//install BootstrapVue
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
