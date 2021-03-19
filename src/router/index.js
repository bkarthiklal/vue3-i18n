import { createRouter, createWebHistory } from "vue-router";

function load(component) {
  // '@' is aliased to src/components
  return () => import(`@/views/${component}.vue`);
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: load('Home'),
  },
  {
    path: '/about',
    name: 'About',
    component: load('About'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
