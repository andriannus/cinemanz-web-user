import AppBanner from '@/shared/components/AppBanner.vue';

export default {
  data() {
    return {
      title: '',
    };
  },

  components: {
    AppBanner,
  },

  methods: {
    setBannerTitle(value) {
      this.title = value;
    },
  },
};
