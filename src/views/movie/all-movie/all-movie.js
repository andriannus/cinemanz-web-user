import PaginatedMovies from '@/components/paginated-movies.vue';

export default {
  metaInfo: {
    title: 'All Movie',
  },

  components: {
    'paginated-movies': PaginatedMovies,
  },

  mounted() {
    const { meta } = this.$route;

    this.$emit('titleSpecified', meta.title);
  },
};
