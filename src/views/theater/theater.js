import AppBanner from '@/shared/components/app-banner.vue';

export default {
  data() {
    return {
      title: '',
    };
  },

  components: {
    'app-banner': AppBanner,
  },

  methods: {
    setBannerTitle(value) {
      this.title = value;
    },
  },
};
