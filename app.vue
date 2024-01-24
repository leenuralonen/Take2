<template>
  <div id="app">
    <Header />
    <HomePage />
    <DataEntryForms />
    <Footer />
    <SignupPage />
  
  </div>
</template>

<script>

import Header from '@pages/Header.vue';
import Footer from '@/Footer.vue';
import DataEntryForms from '@/DataEntryForms.vue';
import SignupPage from '@/SignupPage.vue'; 
import HomePage from '@pages/homepage.vue';
export default {
  components: {
    Header,
    DataEntryForms,
    Footer,
    HomePage,
    SignupPage, 
    
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