import AppBanner from '@/components/app-banner.vue';
import PaginatedMovies from '@/components/paginated-movies.vue';
import PaginatedTheaters from '@/components/paginated-theaters.vue';
import PER_PAGE from '@/shared/constants/data.constant';
import MOVIES from '@/graphql/query/Movies.gql';

export default {
  components: {
    'app-banner': AppBanner,
    'paginated-movies': PaginatedMovies,
    'paginated-theaters': PaginatedTheaters,
  },

  data() {
    return {
      movie: {
        errorMessage: '',
        isLoading: false,
        results: [],
      },
    };
  },

  mounted() {
    this.fetchAllMovie();
  },

  methods: {
    async fetchAllMovie(page) {
      this.movie.isLoading = true;

      try {
        const { data } = await this.fetchMovies(page);

        this.movie.results = data.movies.results;
      } catch (error) {
        console.log(error);
      } finally {
        this.movie.isLoading = false;
      }
    },

    fetchMovies(page, showing) {
      const validPage = page || 1;
      const skip = (validPage - 1) * PER_PAGE;

      return this.$apollo.query({
        query: MOVIES,
        variables: {
          skip,
          limit: PER_PAGE,
          showing,
        },
      });
    },
  },
};
