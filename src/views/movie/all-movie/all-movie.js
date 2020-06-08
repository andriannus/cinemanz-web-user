import PaginatedMovies from '@/components/paginated-movies.vue';

import PER_PAGE from '@/shared/constants/data.constant';
import MOVIES from '@/graphql/query/Movies.gql';

export default {
  metaInfo: {
    title: 'All Movie',
  },

  components: {
    'paginated-movies': PaginatedMovies,
  },

  data() {
    return {
      errorMessage: '',
      isLoading: false,
      movies: [],
    };
  },

  mounted() {
    const { meta } = this.$route;

    this.$emit('titleSpecified', meta.title);
    this.fetchMovies();
  },

  methods: {
    async fetchMovies(page = 1, showing) {
      const skip = (page - 1) * PER_PAGE;

      this.isLoading = true;

      try {
        const { data } = await this.$apollo.query({
          query: MOVIES,
          variables: {
            skip,
            limit: PER_PAGE,
            showing,
          },
        });

        this.movies = data.movies.results;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
