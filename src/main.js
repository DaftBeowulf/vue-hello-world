import Vue from "vue";
import App from "./App.vue";
import Hobbits from "./components/Hobbits";
Vue.component("hobbits", Hobbits);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
