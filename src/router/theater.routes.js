const theaterRoutes = [
  {
    path: '/theater',
    name: 'Theater',
    component: () => import(/* webpackChunkName: "theater" */ '@/views/theater/Theater.vue'),
    children: [
      {
        path: '/',
        component: () => import(
          /* webpackChunkName: "all-theater" */ '@/views/theater/all-theater/AllTheater.vue'
        ),
        meta: {
          title: 'All Theater',
        },
      },
      {
        path: ':id',
        component: () => import(
          /* webpackChunkName: "detail-theater" */ '@/views/theater/detail-theater/DetailTheater.vue'
        ),
      },
    ],
  },
];

export default theaterRoutes;
