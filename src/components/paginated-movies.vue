<template>
  <div class="columns is-multiline is-mobile">
    <div
      v-for="(movie, index) in movies"
      :key="'m-' + index"
      class="column is-one-third is-one-third-mobile has-text-centered"
    >
      <img src="https://via.placeholder.com/280x420?text=No+Picture" :alt="movie.title" />

      <h6 class="is-size-6">{{ movie.title }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movies: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
