import { createRouter, createWebHashHistory } from 'vue-router';
import EventList from '../views/EventList.vue';
import CartDemo from '../views/CartDemo.vue';
import About from '../views/About.vue';

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
  {
    path: '/cart-demo',
    name: 'CartDemo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CartDemo,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
