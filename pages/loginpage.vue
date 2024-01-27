<template>
    <div class="login-page">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username or Email:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Enter your username or email"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
        <button type="forgot">Forgot Password</button>
        <nuxt-link to="/signuppage" class="Signup">
        <button>Create an Account</button>
      </nuxt-link>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Add your authentication logic here
        // For example, you might use a service to authenticate the user
        console.log('Logging in with:', this.username, this.password);
  
        // After successful login, you might navigate to another page
        // Example: this.$router.push('/dashboard');
      },
    },
  };
  </script>
  
  <style scoped>
  .login-page {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  
  button {
    background-color: #41b883;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  