<script setup>
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [

  {
    path: '',
    name: 'HomePage',
    component: Homepage,
  },
  {
    path: '',
    name: 'Sign Up',
    component: Signup,
  },
  {
    path: '',
    name: 'Data Entry',
    component: DataEntry,
  }
];

const router1 = new VueRouter({
  routes,
});
</script>