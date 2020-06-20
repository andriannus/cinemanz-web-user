<template>
  <div>
    <app-banner title="Home"></app-banner>

    <div class="section">
      <nav class="level">
        <div class="level-item">
          <h2 class="is-size-5">Movies</h2>
        </div>
      </nav>

      <paginated-movies :movies="movie.results"></paginated-movies>

      <div class="has-text-centered">
        <router-link class="button is-dark is-outlined" to="/movie">See More Movies</router-link>
      </div>

      <hr />

      <nav class="level">
        <div class="level-item">
          <h2 class="is-size-5">Theaters</h2>
        </div>
      </nav>

      <paginated-theaters :theaters="theater.results"></paginated-theaters>

      <div class="has-text-centered">
        <router-link
          class="button is-dark is-outlined"
          to="/theater"
        >See More Theaters</router-link>
      </div>
    </div>
  </div>
</template>

<script src="./home.js"></script>
