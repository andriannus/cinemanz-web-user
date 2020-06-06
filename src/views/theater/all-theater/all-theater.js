export default {
  metaInfo: {
    title: 'All Theater',
  },

  mounted() {
    const { meta } = this.$route;

    this.$emit('titleSpecified', meta.title);
  },
};
