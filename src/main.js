import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes';

if (!localStorage.clientId) {
  localStorage.clientId = btoa(Math.random() * Number.MAX_SAFE_INTEGER) + btoa(Math.random() * Number.MAX_SAFE_INTEGER);
}

Vue.config.productionTip = false

const router = new VueRouter({
  routes
});

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
