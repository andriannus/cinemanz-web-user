import Vue from 'vue';

import App from '@/App.vue';
import '@/main.scss';
import router from '@/router';
import apolloProvider from '@/plugins/vue-apollo.plugin';
import '@/plugins/vue-meta.plugin';

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');
