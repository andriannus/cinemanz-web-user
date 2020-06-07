import PaginatedTheaters from '@/components/paginated-theaters.vue';

export default {
  metaInfo: {
    title: 'All Theater',
  },

  components: {
    'paginated-theaters': PaginatedTheaters,
  },

  mounted() {
    const { meta } = this.$route;

    this.$emit('titleSpecified', meta.title);
  },
};
