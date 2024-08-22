import { createRouter, createWebHistory } from 'vue-router';
import Detalle from '../components/Detalle.vue';

const routes = [
  { path: '/', redirect: '/detalle' },
  { path: '/detalle', component: Detalle, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;