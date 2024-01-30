<template>
  <div class="about-page">
    <h1>Meet the Team</h1>

    <div class="team-member">
     <!-- <img src="team-member1.jpg" alt="Team Member 1" /> -->
      <div class="member-details">
        <h2>John Micahel Malbas</h2>
        <p>Hello there! I'm a seasoned professional with a passion for technology, hailing from the beautiful Philippines. With a diverse skill set, I proudly wear the hats of a Senior Web Developer and a Senior Database Administrator.</p>
        <p>In the dynamic realm of web development, I thrive on bringing digital ideas to life. My expertise lies in crafting robust, scalable, and user-friendly web applications that not only meet but exceed client expectations. From front-end design to back-end functionality, I am dedicated to delivering seamless online experiences.</p>
        <p>As a Senior Database Administrator, I specialize in managing and optimizing data ecosystems. My skills encompass designing efficient database structures, ensuring data integrity, and implementing performance tuning strategies. I'm well-versed in a variety of database management systems, ensuring that data is not just stored, but is easily accessible and secure.</p>
        <p>Having grown up in the Philippines, I bring a unique perspective to my work. The vibrant culture and strong sense of community have shaped my approach to collaboration and problem-solving. I understand the importance of diversity and adaptability, and I leverage these qualities to create solutions that resonate globally.</p>
      <P>Outside the realm of technology, you'll find me exploring the rich landscapes of the Philippines, indulging in local cuisine, or immersing myself in the arts. I believe in continuous learning, staying updated with the latest industry trends, and sharing knowledge within the tech community.</P>
    </div>
    </div>

    <div class="team-member">
     <!---- <img src="team-member2.jpg" alt="Team Member 2" /> -->
      <div class="member-details">
        <h2>Leenur Alonen</h2>
        <p><link rel="stylesheet" href="https://www.linkedin.com/in/leenur-alonen-3513a6291/"></p>
      </div>
    </div>

    <div class="team-member">
     <!---- <img src="team-member2.jpg" alt="Team Member 2" /> -->
      <div class="member-details">
        <h2>Koryom Lam</h2>
        <p>git</p>
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