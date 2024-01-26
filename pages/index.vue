<script setup>
import Vue from 'vue';
import VueRouter from 'vue-router';
import dataentryform from '@/pages/dataentryform.vue'
import signuppage from '@/pages/signuppage.vue'
import homepage from './homepage.vue'

Vue.use(VueRouter);

const routes = [

  {
    path: '/',
    name: 'HomePage',
    component: homepage,
  },
  {
    path: '/sign-up',
    name: 'Sign Up',
    component: signuppage,
  },
  {
    path: '/data-entry',
    name: 'Data Entry',
    component: dataentryform,
  }
  
];

const router1 = new VueRouter({
  routes,
});
</script>