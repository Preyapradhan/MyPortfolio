<template>
  <footer class="footer">
    <div class="footer-container">
      <h2 data-aos="fade-up">LET'S CONNECT</h2>

      <div class="social-icons">
        <a href="https://www.linkedin.com/in/preya-pradhan-a15627263/" target="_blank">
          <font-awesome-icon :icon="['fab', 'linkedin']" class="icon linkedin" />
        </a>
        <a href="https://github.com/Preyapradhan" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" class="icon github" />
        </a>
        <a href="https://twitter.com" target="_blank">
          <font-awesome-icon :icon="['fab', 'twitter']" class="icon twitter" />
        </a>
      </div>

      <p class="copyright" data-aos="fade-up" data-aos-delay="400">
        © 2025 Preya Pradhan. All Rights Reserved.
      </p>
    </div>

    <!-- Floating Neon Glows -->
    <div class="glow glow1"></div>
    <div class="glow glow2"></div>
  </footer>
</template>

<style scoped>
html, body {
  overflow-y: hidden; /* Prevent unwanted horizontal scrolling */
}

/* Footer Styling */
.footer {
  position: relative;
  background: rgba(0, 0, 0, 0.6); /* Dark Transparent */
  backdrop-filter: blur(12px);
  width: 80%; /* Aligns with content box */
  margin: 40px auto; /* Centered inside content */
  padding: 30px 20px;
  text-align: center;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  overflow: hidden;
}

/* Floating Neon Glows */
.glow {
  position: absolute;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.5), transparent);
  filter: blur(90px);
  animation: floating 5s infinite alternate ease-in-out;
}

@keyframes floating {
  0% { transform: translateY(0); }
  100% { transform: translateY(15px); }
}

.glow1 {
  top: -40px;
  left: 10%;
}

.glow2 {
  bottom: -40px;
  right: 10%;
  animation-delay: 2s;
}

/* Footer Content */
.footer-container {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  min-height: 100px;
}

/* Heading with Neon Glow */
h2 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #0ff;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 15px rgba(0, 255, 255, 1);
  transition: transform 0.3s ease-in-out;
}

h2:hover {
  transform: scale(1.05);
}

/* Social Icons */
.social-icons {
  display: flex;
  gap: 15px;
}

.icon {
  font-size: 1.8rem;
  color: white;
  transition: transform 0.3s ease-in-out, color 0.3s, text-shadow 0.3s;
}

.icon:hover {
  transform: scale(1.2);
  text-shadow: 0 0 20px rgba(0, 255, 255, 1);
}

/* Individual Icon Glow Colors */
.linkedin:hover { color: #0077b5; }
.github:hover { color: #f5f5f5; }
.twitter:hover { color: #1da1f2; }

/* Copyright Text */
.copyright {
  font-size: 0.9rem;
  opacity: 0.7;
  transition: opacity 0.3s ease-in-out;
}

.copyright:hover {
  opacity: 1;
}
</style>
