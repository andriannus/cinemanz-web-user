<template>
  <div>
    <paginated-theaters :theaters="theater.data"></paginated-theaters>

    <nav v-if="theater.nextPage" class="level">
      <div class="level-item">
        <button class="button is-dark is-outlined">Load More</button>
      </div>
    </nav>
  </div>
</template>

<script src="./all-theater"></script>
