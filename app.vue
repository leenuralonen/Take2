<template>
  <div id="app">
    <homepage />
    <dataentryforms />
    <signuppage />
  
  </div>
</template>

<script>
import dataentryforms from '';
import signuppage from ''; 
import homepage from '';
export default {
  components: {
    dataentryforms,
    homepage,
    signuppage, 
    
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