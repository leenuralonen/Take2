<template>
  <div>
    <h1>Contact Information</h1>
    <div class="contact">
      <div>
        <strong>Name:</strong> Leenur Alonen
        <br />
        <strong>Email:</strong> leenur.alonen@edu.sait.ca
      </div>
      <div>
        <strong>Name:</strong> John Michael Malbas
        <br />
        <strong>Email:</strong> johnmichael.malbas@edu.sait.ca
      </div>
      <div>
        <strong>Name:</strong> Kory Lam
        <br />
        <strong>Email:</strong> koryom.lam@edu.sait.ca
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactInformation',
  // You can add component logic here
}
</script>

<style scoped>
/* Add your styling here */
.contact {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

/* You can add more styles as needed */
</style>