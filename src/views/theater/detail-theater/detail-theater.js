import THEATER from '@/shared/graphql/Theater.gql';

export default {
  metaInfo() {
    return {
      title: this.theater.name,
    };
  },

  data() {
    return {
      errorMessage: '',
      isLoading: false,
      theater: {},
    };
  },

  mounted() {
    const { id } = this.$route.params;

    this.fetchTheater(id);
  },

  methods: {
    async fetchTheater(id) {
      this.$emit('titleSpecified', 'Loading...');
      this.isLoading = true;

      try {
        const { data } = await this.$apollo.query({
          query: THEATER,
          variables: {
            id,
          },
        });

        this.errorMessage = '';
        this.theater = data.theater.result;

        this.$emit('titleSpecified', this.theater.name);
      } catch ({ networkError }) {
        this.errorMessage = networkError;
        this.theater = {};

        this.$emit('titleSpecified', '-');
      } finally {
        this.isLoading = false;
      }
    },
  },
};
