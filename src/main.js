import Vue from 'vue';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import apolloProvider from '@/plugins/vue-apollo.plugin';
import '@/plugins/vue-meta.plugin';
import '@/main.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');
