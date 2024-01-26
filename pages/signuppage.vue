<template>
    <div class="signup-container">
      <form @submit.prevent="handleSubmit">
        <h2>Sign Up</h2>
        <label for="email">Email:</label>
        <input v-model="email" type="email" id="email" name="email" required>

        <label for="email">Confirm Email:</label>
        <input v-model="email" type="email" id="email" name="email" required>
  
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" name="password" required>

        <label for="password">Confirm Password:</label>
        <input v-model="password" type="password" id="password" name="password" required>
  
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      handleSubmit() {
        // Handle form submission logic here
        console.log('Email:', this.email);
        console.log('Password:', this.password);
        // You can add further logic for form submission, validation, etc.
      }
    }
  };
  </script>
  
  <style scoped>
  .signup-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  form {
    background-color: #030202;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 12px;
    box-sizing: border-box;
  }
  
  button {
    background-color: #525252;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
  }
  
  button:hover {
    background-color: #323332;
  }
  </style>