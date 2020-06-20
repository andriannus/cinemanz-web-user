const movieRoutes = [
  {
    path: '/movie',
    name: 'Movie',
    component: () => import(/* webpackChunkName: "movie" */ '@/views/movie/movie.vue'),
    children: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "all-movie" */ '@/views/movie/all-movie/all-movie.vue'),
        meta: {
          title: 'All Movie',
        },
      },
      {
        path: 'now-playing',
        component: () => import(/* webpackChunkName: "now-playing" */ '@/views/movie/now-playing/now-playing.vue'),
        meta: {
          title: 'Now Playing Movies',
        },
      },
      {
        path: 'upcoming',
        component: () => import(/* webpackChunkName: "upcoming" */ '@/views/movie/upcoming/upcoming.vue'),
        meta: {
          title: 'Upcoming Movies',
        },
      },
      {
        path: ':id',
        component: () => import(/* webpackChunkName: "detail-movie" */ '@/views/movie/detail-movie/detail-movie.vue'),
      },
    ],
  },
];

export default movieRoutes;
