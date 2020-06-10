<template>
  <div>
    <app-navbar></app-navbar>

    <div id="app" class="container has-background-white">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppNavbar from '@/shared/components/app-navbar.vue';

export default {
  components: {
    'app-navbar': AppNavbar,
  },

  metaInfo: {
    title: 'Home',
    titleTemplate: '%s - CinemaNz',
  },
};
</script>
