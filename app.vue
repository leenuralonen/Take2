<template>
  <div id="app">
    <AppHeader/>
    <NuxtPage/>
    <AppFooter/>
    
    
  </div>
</template>

<script>

import dataentryform from './pages/dataentryform.vue';
import contact from './pages/contact.vue'
import about from '@/pages/about.vue';
import loginpage from '@/pages/loginpage.vue';
import signuppage from './pages/signuppage.vue';

export default {
  components: {
    dataentryform,
    contact,
    about,
    loginpage,
    signuppage
},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>