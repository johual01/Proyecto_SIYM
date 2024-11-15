// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Simulacion from '../components/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Simulacion',
    name: 'Simulacion',
    component: Simulacion
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;