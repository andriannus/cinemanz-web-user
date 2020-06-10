<template>
  <div class="mb-5">
    <div v-if="theaters.length" class="columns is-multiline is-mobile">
      <div v-for="(theater, index) in theaters" :key="'t-' + index" class="column is-12">
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img :src="getImageUrlWithTheaterName(theater.name)" :alt="theater.name" />
            </p>
          </figure>

          <div class="media-content">
            <div class="content">
              <p>
                {{ theater.name }}
                <br />
                <small>{{ theater.address }}</small>
              </p>
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

  methods: {
    getImageUrlWithTheaterName(theater) {
      const IMAGE_URL = 'https://via.placeholder.com/64x64';
      const text = `?text=${theater.charAt(0)}`;

      return `${IMAGE_URL}${text}`;
    },
  },
};
</script>
