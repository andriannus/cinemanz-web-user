<template>
  <div class="has-text-centered py-2">
    <font-awesome-icon :icon="icon" class="mb-3" size="6x"></font-awesome-icon>
    <h4 class="is-size-4">{{ text }}</h4>
  </div>
</template>

<script>
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  props: {
    icon: {
      type: Object,
      default() {
        return faSearch;
      },
    },

    text: {
      type: String,
      default: 'Data Not Found',
    },
  },

  components: {
    FontAwesomeIcon,
  },
};
</script>
