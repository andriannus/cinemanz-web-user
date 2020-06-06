export default {
  metaInfo: {
    title: 'Upcoming Movies',
  },

  mounted() {
    const { meta } = this.$route;

    this.$emit('titleSpecified', meta.title);
  },
};
