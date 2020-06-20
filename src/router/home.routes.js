const homeRoutes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/home.vue'),
  },
];

export default homeRoutes;
