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
            v-for="(menu, mobileKey) in menus"
            :key="'m-' + mobileKey"
            :to="menu.to"
            active-class="is-active"
            class="navbar-item is-hidden-mobile"
          >{{ menu.name }}</router-link>

          <router-link
            v-for="(menu, desktopKey) in menus"
            :key="'d-' + desktopKey"
            :to="menu.to"
            active-class="is-active"
            class="navbar-item is-hidden-tablet"
            @click.native="toggleNavbarMenu()"
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
