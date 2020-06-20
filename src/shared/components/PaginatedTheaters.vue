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
                <router-link :to="'/theater/' + theater._id" class="is-ellipsis">
                  {{ theater.name || '-' }}
                </router-link>
                <br />
                <small>{{ theater.address || '-' }}</small>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>

    <not-found v-else></not-found>
  </div>
</template>

<script>
import NotFound from '@/shared/components/NotFound.vue';
import { DEFAULT_IMAGE_URL } from '@/shared/constants/data.constant';

export default {
  props: {
    theaters: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  components: {
    NotFound,
  },

  methods: {
    getImageUrlWithTheaterName(theater) {
      const text = `?text=${theater ? theater.charAt(0) : '-'}`;

      return `${DEFAULT_IMAGE_URL.theater}${text}`;
    },
  },
};
</script>
