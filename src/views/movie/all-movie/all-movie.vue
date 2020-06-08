<template>
  <div>
    <nav class="level">
      <div class="level-item">
        <h2 class="is-size-5">Now Playing Movies</h2>
      </div>
    </nav>

    <paginated-movies :movies="nowPlaying.movies"></paginated-movies>

    <nav class="level">
      <div class="level-item">
        <router-link
          class="button is-dark is-outlined"
          to="/movie/now-playing"
        >See More</router-link>
      </div>
    </nav>

    <hr />

    <nav class="level">
      <div class="level-item">
        <h2 class="is-size-5">Upcoming Movies</h2>
      </div>
    </nav>

    <paginated-movies :movies="upcoming.movies"></paginated-movies>

    <nav class="level">
      <div class="level-item">
        <router-link
          class="button is-dark is-outlined"
          to="/movie/upcoming"
        >See More</router-link>
      </div>
    </nav>
  </div>
</template>

<script src="./all-movie.js"></script>
