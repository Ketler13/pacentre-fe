import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import store from './store';
import { createProvider } from './vue-apollo';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  store,
  apolloProvider: createProvider(),
  router,
  render: h => h(App),
}).$mount('#app');
