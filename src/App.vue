<template>
  <div>
    <app-navbar></app-navbar>

    <div id="app" class="container has-background-white">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppNavbar from '@/shared/components/AppNavbar.vue';

export default {
  components: {
    AppNavbar,
  },

  metaInfo: {
    title: 'Home',
    titleTemplate: '%s - CinemaNz',
  },
};
</script>
