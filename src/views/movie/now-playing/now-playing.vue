<template>
  <div>
    <paginated-movies :movies="movie.data"></paginated-movies>

    <load-more-button
      v-if="movie.nextPage"
      @buttonClicked="fetchNowPlayingMovies(movie.nextPage)"
    ></load-more-button>
  </div>
</template>

<script src="./now-playing.js"></script>
