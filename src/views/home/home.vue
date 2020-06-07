<template>
  <div>
    <app-banner title="Home"></app-banner>

    <div class="section">
      <nav class="level">
        <div class="level-item">
          <h2 class="is-size-5">Movies</h2>
        </div>
      </nav>

      <paginated-movies></paginated-movies>

      <nav class="level">
        <div class="level-item">
          <router-link class="button is-dark is-outlined" to="/movie">See More</router-link>
        </div>
      </nav>

      <hr />

      <nav class="level">
        <div class="level-item">
          <h2 class="is-size-5">Theaters</h2>
        </div>
      </nav>

      <paginated-theaters></paginated-theaters>

      <nav class="level">
        <div class="level-item">
          <router-link class="button is-dark is-outlined" to="/theater">See More</router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script src="./home.js"></script>
