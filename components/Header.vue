<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: 'J.Michael, Daniel, Len & Kory',
    };
  },
};
</script>

<style scoped>
header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
}
</style>