<template>
  <div id="app">
    <Header />
    <DataEntryForms />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import DataEntryForms from '@/components/DataEntryForms.vue';

export default {
  components: {
    Header,
    DataEntryForms,
    Footer,
  },
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