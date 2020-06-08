<template>
  <div>
    <paginated-movies :movies="movies"></paginated-movies>

    <nav class="level">
      <div class="level-item">
        <button class="button is-dark is-outlined">Load More</button>
      </div>
    </nav>
  </div>
</template>

<script src="./upcoming.js"></script>
