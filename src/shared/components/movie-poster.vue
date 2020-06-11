<template>
  <div>
    <img :src="getValidImgUrl(src)" :alt="alt" @error="handleLoadImageError" />
  </div>
</template>

<script>
import { DEFAULT_IMAGE_URL } from '@/shared/constants/data.constant';

export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
  },

  methods: {
    getValidImgUrl(url) {
      const validUrl = url || DEFAULT_IMAGE_URL.movie;

      return validUrl;
    },

    handleLoadImageError(e) {
      e.target.src = DEFAULT_IMAGE_URL.movie;
    },
  },
};
</script>
