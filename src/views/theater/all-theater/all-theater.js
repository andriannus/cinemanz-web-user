import PaginatedTheaters from '@/shared/components/paginated-theaters.vue';
import PER_PAGE from '@/shared/constants/data.constant';
import THEATERS from '@/shared/graphql/Theaters.gql';
import paginate from '@/shared/utils/transform.util';

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
      theater: {},
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

        const { results, total } = data.theaters;

        const options = { page: validPage, limit: PER_PAGE, total };
        const theater = paginate(results, options);

        this.errorMessage = '';
        this.theater = theater;
      } catch ({ networkError }) {
        this.errorMessage = networkError;
        this.theater = {};
      } finally {
        this.isLoading = false;
      }
    },
  },
};
