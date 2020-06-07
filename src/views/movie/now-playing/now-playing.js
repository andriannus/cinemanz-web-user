import PaginatedMovies from '@/components/paginated-movies.vue';

export default {
  metaInfo: {
    title: 'Now Playing Movies',
  },

  components: {
    'paginated-movies': PaginatedMovies,
  },

  mounted() {
    const { meta } = this.$route;

    this.$emit('titleSpecified', meta.title);
  },
};
