import AppBanner from '@/shared/components/AppBanner.vue';
import PaginatedMovies from '@/shared/components/PaginatedMovies.vue';
import PaginatedTheaters from '@/shared/components/PaginatedTheaters.vue';
import PER_PAGE from '@/shared/constants/data.constant';
import MOVIES from '@/shared/graphql/Movies.gql';
import THEATERS from '@/shared/graphql/Theaters.gql';

export default {
  components: {
    AppBanner,
    PaginatedMovies,
    PaginatedTheaters,
  },

  data() {
    return {
      movie: {
        errorMessage: '',
        isLoading: false,
        results: [],
      },
      theater: {
        errorMessage: '',
        isLoading: false,
        results: [],
      },
    };
  },

  mounted() {
    this.fetchMovies();
    this.fetchTheaters();
  },

  methods: {
    async fetchMovies(page, showing) {
      const validPage = page || 1;
      const skip = (validPage - 1) * PER_PAGE;

      this.movie.isLoading = true;

      try {
        const { data } = await this.$apollo.query({
          query: MOVIES,
          variables: {
            skip,
            limit: PER_PAGE,
            showing,
          },
        });

        this.movie = {
          ...this.movie,
          errorMessage: '',
          results: data.movies.results,
        };
      } catch ({ networkError }) {
        this.movie = {
          ...this.movie,
          errorMessage: networkError,
          results: [],
        };
      } finally {
        this.movie.isLoading = false;
      }
    },

    async fetchTheaters(page) {
      const validPage = page || 1;
      const skip = (validPage - 1) * PER_PAGE;

      this.theater.isLoading = true;

      try {
        const { data } = await this.$apollo.query({
          query: THEATERS,
          variables: {
            skip,
            limit: PER_PAGE,
          },
        });

        this.theater = {
          ...this.theater,
          errorMessage: '',
          results: data.theaters.results,
        };
      } catch ({ networkError }) {
        this.theater = {
          ...this.theater,
          errorMessage: networkError,
          results: [],
        };
      } finally {
        this.theater.isLoading = false;
      }
    },
  },
};
