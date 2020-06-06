export default {
  metaInfo: {
    title: 'All Movie',
  },

  mounted() {
    const { meta } = this.$route;

    this.$emit('titleSpecified', meta.title);
  },
};
