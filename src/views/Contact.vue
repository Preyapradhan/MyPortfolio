<template>
  <section class="contact">
    <h2>Contact Me</h2>
    <p>Let's collaborate! Feel free to reach out.</p>
    
    <div class="contact-container">
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="input-group">
          <input type="text" v-model="name" required />
          <label>Your Name</label>
        </div>
        <div class="input-group">
          <input type="email" v-model="email" required />
          <label>Your Email</label>
        </div>
        <div class="input-group">
          <textarea v-model="message" required></textarea>
          <label>Your Message</label>
        </div>
        <button type="submit" class="send-btn">Send Message</button>
      </form>
      
      <div class="contact-info">
          <div class="info-item">
            <i class="fas fa-map-marker-alt"></i>
            <p>Gujarat, India</p>
          </div>
          <div class="info-item">
            <i class="fas fa-envelope"></i>
            <p>preyapradhan2645@gmail.com</p>
          </div>
          <div class="info-item">
            <i class="fas fa-phone"></i>
            <p>+123 456 7890</p>
          </div>
          <div class="social-links">
            <a href="mailto:email@example.com" class="social-icon"><i class="fas fa-envelope"></i></a>
            <a href="https://github.com" target="_blank" class="social-icon"><i class="fab fa-github"></i></a>
            <a href="https://linkedin.com" target="_blank" class="social-icon"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      alert(`Thanks, ${this.name}! Your message has been sent.`);
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
.contact {
  text-align: center;
  padding: 60px 20px;
  background: rgba(0, 0, 0, 0.85);
  color: white;
}

h2 {
  font-size: 2.5rem;
  color: #ffcc00;
  margin-bottom: 10px;
}

.contact-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 30px;
}

.contact-form {
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.2);
}

.input-group {
  position: relative;
  margin-bottom: 20px;
}

.input-group input,
.input-group textarea {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1rem;
}

.input-group label {
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  color: #ddd;
  font-size: 0.9rem;
  transition: 0.3s ease-in-out;
}

.input-group input:focus + label,
.input-group textarea:focus + label,
.input-group input:valid + label,
.input-group textarea:valid + label {
  top: 0;
  left: 12px;
  font-size: 0.75rem;
  color: #ffcc00;
}

.send-btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 5px;
  background: linear-gradient(45deg, #ffcc00, #ff66b2);
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.send-btn:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 10px rgba(255, 204, 0, 0.6);
}

.contact-info {
  flex: 1;
  min-width: 250px;
  text-align: left;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.info-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1rem;
  margin-bottom: 15px;
}

.info-item i {
  color: #ffcc00;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.social-icon {
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease-in-out;
}

.social-icon:hover {
  color: #ffcc00;
}
</style>
