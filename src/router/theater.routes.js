import Theater from '@/views/theater/theater.vue';
import AllTheater from '@/views/theater/all-theater/all-theater.vue';
import DetailTheater from '@/views/theater/detail-theater/detail-theater.vue';

const theaterRoutes = [
  {
    path: '/theater',
    name: 'Theater',
    component: Theater,
    children: [
      {
        path: '/',
        component: AllTheater,
        meta: {
          title: 'All Theater',
        },
      },
      {
        path: ':id',
        component: DetailTheater,
      },
    ],
  },
];

export default theaterRoutes;
