import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Injection from "./components/Injection";
import NoInjection from "./components/NoInjection";

const routes = [
  { path: "/injection", component: Injection },
  { path: "/no-injection", component: NoInjection },
];

const router = new VueRouter({
  routes
})

Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
