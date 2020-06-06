export default {
  metaInfo: {
    title: 'Selected Movie',
  },

  mounted() {
    this.$emit('titleSpecified', 'Selected Movie');
  },
};
