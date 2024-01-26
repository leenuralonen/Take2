<template>
  <div class="data-entry-forms">
    <h2>Data Entry Forms</h2>

    <!-- Personal Information Form -->
    <form @submit.prevent="submitPersonalInfoForm">
      <h3>Personal Information</h3>
      <label for="fullName">Full Name:</label>
      <input type="text" id="fullName" v-model="personalInfo.fullName" required />

      <label for="age">Age:</label>
      <input type="number" id="age" v-model="personalInfo.age" required />

      <button type="submit">Submit Personal Info</button>
    </form>

    <!-- Contact Information Form -->
    <form @submit.prevent="submitContactInfoForm">
      <h3>Contact Information</h3>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="contactInfo.email" required />

      <label for="phoneNumber">Phone Number:</label>
      <input type="tel" id="phoneNumber" v-model="contactInfo.phoneNumber" required />

      <button type="submit">Submit Contact Info</button>
    </form>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      personalInfo: {
        fullName: '',
        age: null,
      },
      contactInfo: {
        email: '',
        phoneNumber: '',
      },
      loginCredentials: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    submitPersonalInfoForm() {
      console.log('Personal Information Form submitted:', this.personalInfo);
      this.resetForm('personalInfo');
    },
    submitContactInfoForm() {
      console.log('Contact Information Form submitted:', this.contactInfo);
      this.resetForm('contactInfo');
    },
    submitLoginCredentialsForm() {
      console.log('Login Credentials Form submitted:', this.loginCredentials);
      this.resetForm('loginCredentials');
    },
    resetForm(formKey) {
      this[formKey] = {};
    },
  },
};
</script>

<style scoped>
.data-entry-forms {
  max-width: 600px;
  margin: 20px auto;
}

h2, h3 {
  text-align: center;
}

form {
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

label {
  display: block;
  margin-top: 10px;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  box-sizing: border-box;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
}
</style>