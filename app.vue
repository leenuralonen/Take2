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
import homepage from './pages/homepage.vue';
import AppHeader from "./components/AppHeader.vue";
import AppFooter from './components/AppFooter.vue';
import about from '@/pages/about.vue';
import index from '@/pages/index.vue';

export default {
  components: {
    AppHeader,
    homepage,
    AppFooter,
    dataentryform,
    contact,
    about,
    index,
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