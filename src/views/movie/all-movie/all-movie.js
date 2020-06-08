import PaginatedMovies from '@/components/paginated-movies.vue';
import PER_PAGE from '@/shared/constants/data.constant';
import SHOWING_MOVIE from '@/shared/constants/movie.constant';
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
      nowPlaying: {
        errorMessage: '',
        isLoading: false,
        movies: [],
      },
      upcoming: {
        errorMessage: '',
        isLoading: false,
        movies: [],
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
        const { data } = await this.fetchMovies(page, SHOWING_MOVIE.nowPlaying);

        this.nowPlaying.movies = data.movies.results;
      } catch (error) {
        console.log(error);
      } finally {
        this.nowPlaying.isLoading = false;
      }
    },

    async fetchUpcomingMovies(page) {
      this.upcoming.isLoading = true;

      try {
        const { data } = await this.fetchMovies(page, SHOWING_MOVIE.upcoming);

        this.upcoming.movies = data.movies.results;
      } catch (error) {
        console.log(error);
      } finally {
        this.upcoming.isLoading = false;
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
