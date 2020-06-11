<template>
  <div>
    <paginated-movies :movies="movie.data"></paginated-movies>

    <nav v-if="movie.nextPage" class="level">
      <div class="level-item">
        <button
          class="button is-dark is-outlined"
          @click="fetchNowPlayingMovies(movie.nextPage)"
        >Load More</button>
      </div>
    </nav>
  </div>
</template>

<script src="./now-playing.js"></script>
