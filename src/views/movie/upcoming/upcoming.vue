<template>
  <div>
    <paginated-movies :movies="movie.data"></paginated-movies>

    <nav v-if="movie.nextPage" class="level">
      <div class="level-item">
        <button
          class="button is-dark is-outlined"
          @click="fetchUpcomingMovies(movie.nextPage)"
        >Load More</button>
      </div>
    </nav>
  </div>
</template>

<script src="./upcoming.js"></script>
