<template>
  <header class="site-header">
    <div class="logo">
      <!-- <img src="/path/to/your/logo.png" alt="Logo" /> -->
      <span>Group Project</span>
    </div>

    <nav>
      <nuxt-link to="/homepage" class="HomePage">
        <button>Homepage</button>
      </nuxt-link>
      <nuxt-link to="/about" class="about">
        <button>About</button>
      </nuxt-link>
      <nuxt-link to="/contact" class="contact">
        <button>Contact</button>
      </nuxt-link>
      <nuxt-link to="/dataentryform" class="dataentryform">
        <button>Data Entry</button>
      </nuxt-link>
      <nuxt-link to="/loginpage" class="loginpage">
        <button>Login or Register</button>
      </nuxt-link>
    </nav> 

    <button>
      <div class="user-profile">
        <!-- Placeholder for user profile information or login/logout buttons -->
        <span>User Profile</span>
      </div>
    </button>
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
</style>