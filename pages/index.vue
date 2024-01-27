<script setup>
import Vue from 'vue';
import VueRouter from 'vue-router';
import app from '~/app.vue';

Vue.use(VueRouter);

const routes = [

  {
    path: '/',
    name: 'homepage',
    component: app,
  },
  {
    path: '/sign-up',
    name: 'Sign Up',
    component: signuppage,
  },
  {
    path: '/dataentryform',
    name: 'Data Entry',
    component: dataentryform,
  },

  {
    path: '/contact',
    name: 'Contact',
    component: contact,
  }
  
  
];

const router1 = new VueRouter({
  routes,
});

</script> 