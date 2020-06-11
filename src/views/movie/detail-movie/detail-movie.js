import FlatList from '@/shared/components/flat-list.vue';
import MOVIE from '@/shared/graphql/Movie.gql';
import { DEFAULT_IMAGE_URL } from '@/shared/constants/data.constant';

export default {
  metaInfo() {
    return {
      title: this.movie.title,
    };
  },

  components: {
    'flat-list': FlatList,
  },

  data() {
    return {
      defaultMovieImageUrl: DEFAULT_IMAGE_URL.movie,
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

    getValidImgUrl(url) {
      const validUrl = url || DEFAULT_IMAGE_URL.movie;

      return validUrl;
    },

    handleLoadImageError(e) {
      e.target.src = DEFAULT_IMAGE_URL.movie;
    },
  },
};
