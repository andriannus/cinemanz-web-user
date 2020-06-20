import PaginatedMovies from '@/shared/components/PaginatedMovies.vue';
import PER_PAGE from '@/shared/constants/data.constant';
import SHOWING_MOVIE from '@/shared/constants/movie.constant';
import MOVIES from '@/shared/graphql/Movies.gql';
import paginate from '@/shared/utils/transform.util';

export default {
  metaInfo: {
    title: 'All Movie',
  },

  components: {
    PaginatedMovies,
  },

  data() {
    return {
      nowPlaying: {
        errorMessage: '',
        isLoading: false,
        movie: {},
      },
      upcoming: {
        errorMessage: '',
        isLoading: false,
        movie: {},
      },
    };
  },

  mounted() {
    const { meta } = this.$route;
    this.$emit('titleSpecified', meta.title);

    this.fetchNowPlayingMovies();
    this.fetchUpcomingMovies();
  },

  methods: {
    async fetchNowPlayingMovies(page) {
      this.nowPlaying.isLoading = true;

      try {
        const movie = await this.fetchMovies(page, SHOWING_MOVIE.nowPlaying);

        this.nowPlaying = {
          ...this.nowPlaying,
          errorMessage: '',
          movie,
        };
      } catch (error) {
        this.nowPlaying = {
          ...this.nowPlaying,
          errorMessage: error,
          movie: {},
        };
      } finally {
        this.nowPlaying.isLoading = false;
      }
    },

    async fetchUpcomingMovies(page) {
      this.upcoming.isLoading = true;

      try {
        const movie = await this.fetchMovies(page, SHOWING_MOVIE.upcoming);

        this.upcoming = {
          ...this.upcoming,
          errorMessage: '',
          movie,
        };
      } catch (error) {
        this.upcoming = {
          ...this.upcoming,
          errorMessage: error,
          movie: {},
        };
      } finally {
        this.upcoming.isLoading = false;
      }
    },

    fetchMovies(page, showing) {
      const validPage = page || 1;
      const skip = (validPage - 1) * PER_PAGE;

      return new Promise((resolve, reject) => {
        this.$apollo
          .query({
            query: MOVIES,
            variables: {
              skip,
              limit: PER_PAGE,
              showing,
            },
          })
          .then(({ data }) => {
            const { results, total } = data.movies;

            const options = { page: validPage, limit: PER_PAGE, total };
            const result = paginate(results, options);

            resolve(result);
          })
          .catch(({ networkError }) => reject(networkError));
      });
    },
  },
};
