import { faFan } from '@fortawesome/free-solid-svg-icons';

import NotFound from '@/shared/components/NotFound.vue';

export default {
  metaInfo: {
    title: 'Page Not Found',
  },

  components: {
    NotFound,
  },

  data() {
    return {
      icon: faFan,
      text: 'Sorry, page not found',
    };
  },
};
