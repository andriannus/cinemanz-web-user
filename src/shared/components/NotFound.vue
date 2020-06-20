<template>
  <div class="has-text-centered">
    <font-awesome-icon :icon="icon" class="mb-3" size="6x"></font-awesome-icon>
    <h4 class="is-size-4">Data Not Found</h4>
  </div>
</template>

<script>
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  components: {
    'font-awesome-icon': FontAwesomeIcon,
  },

  data() {
    return {
      icon: faSearch,
    };
  },
};
</script>
