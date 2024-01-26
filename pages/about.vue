<template>
  <div class="about-page">
    <h1>About Us</h1>

    <div class="team-member">
     <!-- <img src="team-member1.jpg" alt="Team Member 1" /> -->
      <div class="member-details">
        <h2>John Doe</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>

    <div class="team-member">
     <!---- <img src="team-member2.jpg" alt="Team Member 2" /> -->
      <div class="member-details">
        <h2>Jane Smith</h2>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>

    <!-- Add more team members as needed -->

  </div>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>

<style scoped>
.about-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  color: #333;
}

h1 {
  color: #4a90e2;
}

.team-member {
  display: flex;
  margin-bottom: 20px;
}

img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
}

.member-details {
  flex: 1;
}

/* You can add more styles as needed */
</style>