<template>
  <div>
    <paginated-theaters :theaters="theater.data"></paginated-theaters>

    <load-more-button
      v-if="theater.nextPage"
      @buttonClicked="fetchTheaters(theater.nextPage)"
    ></load-more-button>
  </div>
</template>

<script src="./all-theater"></script>
