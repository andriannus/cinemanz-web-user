import { faFan } from '@fortawesome/free-solid-svg-icons';

import AppNotice from '@/shared/components/AppNotice.vue';

export default {
  metaInfo: {
    title: 'Page Not Found',
  },

  components: {
    AppNotice,
  },

  data() {
    return {
      icon: faFan,
      text: 'Sorry, page not found',
    };
  },
};
