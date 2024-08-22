import { createRouter, createWebHistory } from 'vue-router';
import Detalle from '../components/Detalle.vue';
import Receptor from '../components/Receptor.vue';

const routes = [
  { path: '/', redirect: '/detalle' },
  { path: '/detalle', component: Detalle, props: true },
  { path: '/receptor', component: Receptor, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;