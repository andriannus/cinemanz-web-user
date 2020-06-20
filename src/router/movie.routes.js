const movieRoutes = [
  {
    path: '/movie',
    name: 'Movie',
    component: () => import(/* webpackChunkName: "movie" */ '@/views/movie/Movie.vue'),
    children: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "all-movie" */ '@/views/movie/all-movie/AllMovie.vue'),
        meta: {
          title: 'All Movie',
        },
      },
      {
        path: 'now-playing',
        component: () => import(/* webpackChunkName: "now-playing" */ '@/views/movie/now-playing/NowPlaying.vue'),
        meta: {
          title: 'Now Playing Movies',
        },
      },
      {
        path: 'upcoming',
        component: () => import(/* webpackChunkName: "upcoming" */ '@/views/movie/upcoming/Upcoming.vue'),
        meta: {
          title: 'Upcoming Movies',
        },
      },
      {
        path: ':id',
        component: () => import(/* webpackChunkName: "detail-movie" */ '@/views/movie/detail-movie/DetailMovie.vue'),
      },
    ],
  },
];

export default movieRoutes;
