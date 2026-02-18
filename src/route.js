import { createWebHistory, createRouter } from 'vue-router';
import LinksList from './components/LinksList.vue';
import Home from './components/Home.vue';
import CoupCoeur from './components/CoupCoeur.vue';
import Legal from './components/Legal.vue';
import Changelogs from './components/Changelogs.vue';
import NotFound from './components/NotFound.vue';

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'linktree', path: '/linktree', component: LinksList },
  { name: 'coupdecoeur', path: '/coupdecoeur', component: CoupCoeur },
  { name: 'legal', path: '/mentions-legales', component: Legal },
  { name: 'changelogs', path: '/changelogs', component: Changelogs },
  { name: 'not-found', path: '/:pathMatch(.*)*', component: NotFound },
];

export const router = createRouter({
  history: createWebHistory('/site-web/'),
  routes,
});