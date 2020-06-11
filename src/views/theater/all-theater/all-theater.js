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
      loading: {
        isFetch: false,
        isFetchMore: false,
      },
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
      const selectedLoadingStatus = page ? 'isFetchMore' : 'isFetch';

      this.loading[selectedLoadingStatus] = true;

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
        let theater = paginate(results, options);

        if (page) {
          const updatedData = [...this.theater.data, ...theater.data];

          theater = {
            ...theater,
            data: updatedData,
          };
        }

        this.errorMessage = '';
        this.theater = theater;
      } catch ({ networkError }) {
        this.errorMessage = networkError;
        this.theater = {};
      } finally {
        this.loading[selectedLoadingStatus] = false;
      }
    },
  },
};
