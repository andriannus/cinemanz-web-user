<template>
  <nav aria-label="main navigation" class="navbar is-fixed-top is-dark" role="navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">CinemaNz</router-link>

        <a
          :class="{ 'is-active': isActive }"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          @click="toggleNavbarMenu()"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div :class="{ 'is-active': isActive }" class="navbar-menu">
        <div class="navbar-end">
          <router-link
            v-for="menu in menus"
            :key="menu.name"
            :to="menu.to"
            active-class="is-active"
            class="navbar-item"
          >{{ menu.name }}</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import MENUS from '@/shared/constants/menu.constant';

export default {
  data() {
    return {
      isActive: false,
      menus: MENUS,
    };
  },

  methods: {
    toggleNavbarMenu() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
