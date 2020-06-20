<template>
  <nav class="level">
    <div class="level-item">
      <button
        class="button is-dark is-outlined"
        @click="loadMore"
      >Load More</button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    loadMore() {
      this.$emit('buttonClicked');
    },
  },
};
</script>
