const homeRoutes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/Home.vue'),
  },
];

export default homeRoutes;
