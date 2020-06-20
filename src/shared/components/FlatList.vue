<template>
  <div>
    <span v-if="!words.length">-</span>

    <span
      v-else
      v-for="(word, index) in words"
      :key="'fl-' + index"
      class="is-capitalized"
    >{{ word + (index + 1 === words.length ? '' : ', ') }}</span>
  </div>
</template>

<script>
export default {
  props: {
    words: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
