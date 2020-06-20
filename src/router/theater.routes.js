const theaterRoutes = [
  {
    path: '/theater',
    name: 'Theater',
    component: () => import(/* webpackChunkName: "theater" */ '@/views/theater/theater.vue'),
    children: [
      {
        path: '/',
        component: () => import(
          /* webpackChunkName: "all-theater" */ '@/views/theater/all-theater/all-theater.vue'
        ),
        meta: {
          title: 'All Theater',
        },
      },
      {
        path: ':id',
        component: () => import(
          /* webpackChunkName: "detail-theater" */ '@/views/theater/detail-theater/detail-theater.vue'
        ),
      },
    ],
  },
];

export default theaterRoutes;
