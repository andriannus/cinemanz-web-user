<template>
  <div>
    <div v-if="theaters.length" class="columns is-multiline is-mobile">
      <div v-for="(theater, index) in theaters" :key="'t-' + index" class="column is-12">
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="https://via.placeholder.com/64x64?text=T" alt="Theater" />
            </p>
          </figure>

          <div class="media-content">
            <div class="content">
              <p>Nama Theater</p>
            </div>
          </div>
        </article>
      </div>
    </div>

    <div v-else class="has-text-centered">
      <h4 class="is-size-4">Data Not Found</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    theaters: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
