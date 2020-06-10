import AppBanner from '@/shared/components/app-banner.vue';
import PaginatedMovies from '@/shared/components/paginated-movies.vue';
import PaginatedTheaters from '@/shared/components/paginated-theaters.vue';
import PER_PAGE from '@/shared/constants/data.constant';
import MOVIES from '@/shared/graphql/Movies.gql';
import THEATERS from '@/shared/graphql/Theaters.gql';
import paginate from '@/shared/utils/transform.util';

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
      theater: {
        errorMessage: '',
        isLoading: false,
        result: {},
      },
    };
  },

  mounted() {
    this.fetchAllMovie();
    this.fetchTheaters();
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

        const { results, total } = data.theaters;

        const options = { page: validPage, limit: PER_PAGE, total };
        const result = paginate(results, options);

        this.theater = {
          ...this.theater,
          errorMessage: '',
          result,
        };
      } catch ({ networkError }) {
        this.theater = {
          ...this.theater,
          errorMessage: networkError,
          result: {},
        };
      } finally {
        this.theater.isLoading = false;
      }
    },
  },
};
