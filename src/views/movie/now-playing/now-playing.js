import PaginatedMovies from '@/shared/components/paginated-movies.vue';
import PER_PAGE from '@/shared/constants/data.constant';
import SHOWING_MOVIE from '@/shared/constants/movie.constant';
import MOVIES from '@/shared/graphql/Movies.gql';

export default {
  metaInfo: {
    title: 'Now Playing Movies',
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

    this.fetchNowPlayingMovies();
  },

  methods: {
    async fetchNowPlayingMovies(page) {
      this.isLoading = true;

      try {
        const { data } = await this.fetchMovies(page, SHOWING_MOVIE.nowPlaying);

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
