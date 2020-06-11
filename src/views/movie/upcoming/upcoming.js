import LoadMoreButton from '@/shared/components/load-more-button.vue';
import PaginatedMovies from '@/shared/components/paginated-movies.vue';
import PER_PAGE from '@/shared/constants/data.constant';
import SHOWING_MOVIE from '@/shared/constants/movie.constant';
import MOVIES from '@/shared/graphql/Movies.gql';
import paginate from '@/shared/utils/transform.util';

export default {
  metaInfo: {
    title: 'Upcoming Movies',
  },

  components: {
    'load-more-button': LoadMoreButton,
    'paginated-movies': PaginatedMovies,
  },

  data() {
    return {
      errorMessage: '',
      loading: {
        isFetch: false,
        isFetchMore: false,
      },
      movie: {},
    };
  },

  mounted() {
    const { meta } = this.$route;

    this.$emit('titleSpecified', meta.title);

    this.fetchUpcomingMovies();
  },

  methods: {
    async fetchUpcomingMovies(page) {
      const { upcoming } = SHOWING_MOVIE;
      const validPage = page || 1;
      const skip = (validPage - 1) * PER_PAGE;
      const selectedLoadingStatus = page ? 'isFetchMore' : 'isFetch';

      this.isLoading = true;

      try {
        const { data } = await this.$apollo.query({
          query: MOVIES,
          variables: {
            skip,
            limit: PER_PAGE,
            showing: upcoming,
          },
        });
        const { results, total } = data.movies;

        const options = { page: validPage, limit: PER_PAGE, total };
        let movie = paginate(results, options);

        if (page) {
          const updatedData = [...this.movie.data, ...movie.data];

          movie = {
            ...movie,
            data: updatedData,
          };
        }

        this.errorMessage = '';
        this.movie = movie;
      } catch ({ networkError }) {
        this.errorMessage = networkError;
        this.movie = {};
      } finally {
        this.loading[selectedLoadingStatus] = false;
      }
    },
  },
};
