<template>
  <header class="site-header">
    <div class="logo">
      <img src="" alt="" />
      <span>My Website</span>
    </div>

    <nav>
      <nuxt-link to="/">
        <button>Home</button>
      </nuxt-link>
      <nuxt-link to="/about">
        <button>About</button>
      </nuxt-link>
      <nuxt-link to="/contact">
        <button>Contact</button>
      </nuxt-link>
      <nuxt-link to="/DataEntryForm">
        <button>Data Entry</button>
      </nuxt-link>
      <nuxt-link to="/Logout">
        <button>Log out</button>
      </nuxt-link>
    </nav> 

    <div class="user-profile">
      <!-- Placeholder for user profile information or login/logout buttons -->
      <span>User Profile</span>
    </div>
  </header>
</template>

<script>
export default {
  // You can add data, methods, or other configuration here if needed
};
</script>

<style scoped>
.site-header {
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

nav {
  display: flex;
}

nav nuxt-link {
  color: #fff;
  text-decoration: none;
  margin-right: 15px;
}

.user-profile {
  background-color: aquamarine;
}
</style>