const homeRoutes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/Home.vue'),
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: () => import(/* webpackChunkName: "page-not-found" */ '@/views/page-not-found/PageNotFound.vue'),
  },
];

export default homeRoutes;
