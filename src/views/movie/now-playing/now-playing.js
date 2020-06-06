export default {
  metaInfo: {
    title: 'Now Playing Movies',
  },

  mounted() {
    const { meta } = this.$route;

    this.$emit('titleSpecified', meta.title);
  },
};
