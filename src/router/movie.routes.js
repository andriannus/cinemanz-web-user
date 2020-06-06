import Movie from '@/views/movie/movie.vue';
import AllMovie from '@/views/movie/all-movie/all-movie.vue';
import DetailMovie from '@/views/movie/detail-movie/detail-movie.vue';
import NowPlaying from '@/views/movie/now-playing/now-playing.vue';
import Upcoming from '@/views/movie/upcoming/upcoming.vue';

const movieRoutes = [
  {
    path: '/movie',
    name: 'Movie',
    component: Movie,
    children: [
      {
        path: '/',
        component: AllMovie,
        meta: {
          title: 'All Movie',
        },
      },
      {
        path: 'now-playing',
        component: NowPlaying,
        meta: {
          title: 'Now Playing Movies',
        },
      },
      {
        path: 'upcoming',
        component: Upcoming,
        meta: {
          title: 'Upcoming Movies',
        },
      },
      {
        path: ':id',
        component: DetailMovie,
      },
    ],
  },
];

export default movieRoutes;
