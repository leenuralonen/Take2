import Vue from 'vue';
import VueRouter from 'app.vue';
import Page1 from 'Page1.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '@/Page1.vue',
    name: 'Page1',
    component: Page1,
  },
  // Add more routes as needed
];

const router = new VueRouter({
  routes,
});

export default router;