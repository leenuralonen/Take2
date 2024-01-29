<template>test</template>

<script setup>

import Vue from 'vue';
import VueRouter from 'vue-router';
import dataentryform from '@/pages/dataentryform.vue';
import signuppage from '@/pages/signuppage.vue';
import homepage from '@/pages/homepage.vue';
import contact from '@/pages/contact.vue';
import loginpage from './loginpage.vue';




Vue.use(VueRouter);

const routes = [

  {
    
    path: '/',
    name: 'homepage',
    component: homepage,
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
  },

  {
    path: '/login',
    name: 'loginpage',
    component: loginpage,
  }
  
  
];

const router1 = new VueRouter({
  routes,
});

</script> 
