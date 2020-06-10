import Vue from 'vue';
import VueRouter from 'vue-router';

import homeRoutes from '@/router/home.routes';
import movieRoutes from '@/router/movie.routes';
import theaterRoutes from '@/router/theater.routes';

Vue.use(VueRouter);

const routes = [
  ...homeRoutes,
  ...movieRoutes,
  ...theaterRoutes,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
