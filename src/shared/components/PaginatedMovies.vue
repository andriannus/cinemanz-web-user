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

    <app-notice v-else></app-notice>
  </div>
</template>

<script>
import MoviePoster from '@/shared/components/MoviePoster.vue';
import AppNotice from '@/shared/components/AppNotice.vue';

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
    MoviePoster,
    AppNotice,
  },
};
</script>
