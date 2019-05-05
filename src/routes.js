import Generator from '@/views/Generator';
import Menu from '@/views/Menu';

export default [
  {
    path: '/',
    component: Menu
  },
  {
    path: '/generator/:size/:file',
    component: Generator
  }
];
