<template>
  <div id="app">
    <AppHeader />
    <dataentryform />
    <AppFooter />
    <contact />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import dataentryform from './pages/dataentryform.vue';
import contact from './pages/contact.vue'

export default {
  components: {
    AppHeader,
    dataentryform,
    AppFooter,
    contact
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