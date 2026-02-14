import { createWebHistory, createRouter } from 'vue-router';
import LinksList from './components/LinksList.vue';
import Home from './components/Home.vue'

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'linktree', path: '/linktree', component: LinksList },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});