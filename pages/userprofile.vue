<template>
  <div>
    <h2>User Profile</h2>
    <div>
      <strong>First Name:</strong> {{ user.firstName }}
    </div>
    <div>
      <strong>Last Name:</strong> {{ user.lastName }}
    </div>
    <div>
      <strong>Email Address:</strong> {{ user.email }}
    </div>
    <div>
      <strong>Height:</strong> {{ user.height }} cm
    </div>
    <div>
      <strong>Address:</strong> {{ user.address }}
    </div>
    <div>
      <strong>Country:</strong> {{ user.country }}
    </div>
    <div>
      <strong>Province:</strong> {{ user.province }}
    </div>
    <div>
      <strong>Postal Code:</strong> {{ user.postalCode }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        height: 175,
        address: '123 Main St',
        country: 'Canada',
        province: 'Ontario',
        postalCode: 'A1B 2C3',
      },
    };
  },
};
</script>

<style scoped>
/* Add your styling here if needed */
</style>