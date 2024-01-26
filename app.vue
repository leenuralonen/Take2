<template>
  <div id="app">
    <AppFooter/>
    <AppHeader/>
    <homepage/>
    <dataentryforms/>
    <signuppage/>

    
  </div>
</template>

<script>
import dataentryforms from './pages/dataentryforms.vue';
import homepage from './pages/homepage.vue';
import signuppage from './pages/signuppage.vue';



export default {
  components: {
   homepage,
   dataentryforms,
   signuppage,
   
}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; /* Adjust as needed based on your header's height */
}
</style>