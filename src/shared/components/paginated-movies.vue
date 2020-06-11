<template>
  <div class="mb-5">
    <div v-if="movies.length" class="columns is-multiline is-mobile">
      <div
        v-for="(movie, index) in movies"
        :key="'m-' + index"
        class="column is-one-third is-one-third-mobile has-text-centered"
      >
        <movie-poster :src="movie.poster" :alt="movie.title"></movie-poster>

        <router-link :to="'/movie/' + movie._id" class="is-size-6 is-ellipsis">
          {{ movie.title }}
        </router-link>
      </div>
    </div>

    <not-found v-else></not-found>
  </div>
</template>

<script>
import MoviePoster from '@/shared/components/movie-poster.vue';
import NotFound from '@/shared/components/not-found.vue';

export default {
  props: {
    movies: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  components: {
    'movie-poster': MoviePoster,
    'not-found': NotFound,
  },
};
</script>
