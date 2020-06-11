import FlatList from '@/shared/components/flat-list.vue';
import MoviePoster from '@/shared/components/movie-poster.vue';
import MOVIE from '@/shared/graphql/Movie.gql';

export default {
  metaInfo() {
    return {
      title: this.movie.title,
    };
  },

  components: {
    'flat-list': FlatList,
    'movie-poster': MoviePoster,
  },

  data() {
    return {
      errorMessage: '',
      isLoading: false,
      movie: {},
    };
  },

  mounted() {
    const { id } = this.$route.params;

    this.fetchMovie(id);
  },

  methods: {
    async fetchMovie(id) {
      this.$emit('titleSpecified', 'Loading...');
      this.isLoading = true;

      try {
        const { data } = await this.$apollo.query({
          query: MOVIE,
          variables: {
            id,
          },
        });

        this.errorMessage = '';
        this.movie = data.movie.result;

        this.$emit('titleSpecified', this.movie.title);
      } catch ({ networkError }) {
        this.errorMessage = networkError;
        this.movie = {};

        this.$emit('titleSpecified', '-');
      } finally {
        this.isLoading = false;
      }
    },
  },
};
