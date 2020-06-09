import PaginatedTheaters from '@/components/paginated-theaters.vue';
import PER_PAGE from '@/shared/constants/data.constant';
import THEATERS from '@/graphql/query/Theaters.gql';

export default {
  metaInfo: {
    title: 'All Theater',
  },

  components: {
    'paginated-theaters': PaginatedTheaters,
  },

  data() {
    return {
      errorMessage: '',
      isLoading: false,
      theaters: [],
    };
  },

  mounted() {
    const { meta } = this.$route;

    this.$emit('titleSpecified', meta.title);

    this.fetchTheaters();
  },

  methods: {
    async fetchTheaters(page) {
      const validPage = page || 1;
      const skip = (validPage - 1) * PER_PAGE;

      this.isLoading = true;

      try {
        const { data } = await this.$apollo.query({
          query: THEATERS,
          variables: {
            skip,
            limit: PER_PAGE,
          },
        });

        this.theaters = data.theaters.results;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
