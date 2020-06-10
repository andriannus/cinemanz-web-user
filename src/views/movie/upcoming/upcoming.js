import PaginatedMovies from '@/components/paginated-movies.vue';
import PER_PAGE from '@/shared/constants/data.constant';
import SHOWING_MOVIE from '@/shared/constants/movie.constant';
import MOVIES from '@/shared/graphql/Movies.gql';

export default {
  metaInfo: {
    title: 'Upcoming Movies',
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

    this.fetchUpcomingMovies();
  },

  methods: {
    async fetchUpcomingMovies(page) {
      this.isLoading = true;

      try {
        const { data } = await this.fetchMovies(page, SHOWING_MOVIE.upcoming);

        this.movies = data.movies.results;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
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
