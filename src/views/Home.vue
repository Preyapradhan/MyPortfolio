<template>
  <section class="home">
    <div class="content">
      <h1>Hi, I'm <span>{{ name }}</span></h1>
      <TypedComponent
        :strings="['Web Developer', 'UI/UX Designer', 'Creative Thinker']"
        :typeSpeed="100"
        :backSpeed="50"
        loop
      />
      <p class="description">
        Passionate about software development, web technologies, and machine learning, I am constantly exploring new innovations. Currently honing my skills in React, Flutter, and Flask, I thrive on collaborating in open-source projects and building intelligent, dynamic solutions that push the boundaries of technology.
      </p>
      
      <div class="buttons">
        <a href="/projects" class="btn primary">View My Work</a>
        <a href="/contact" class="btn secondary">Contact Me</a>
      </div>

      <Footer />
    </div>
    <div class="background"></div>
  </section>
</template>

<script>
import TypedComponent from "vue3-typed-js";
import Footer from "../components/Footer.vue";

export default {
  components: { TypedComponent, Footer },
  data() {
    return {
      name: "Preya Pradhan",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.scrollY;
      document.querySelector(".background").style.transform = `translateY(${scrollTop * 0.3}px)`;
    },
  },
};
</script>

<style scoped>

/* Modern Layout */
.home {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Align content to the left */
  text-align: left;
  width: 100%;
  height: 190vh;
  position: relative;
  overflow: hidden;
  color: white;
  background: radial-gradient(circle at center, rgba(0, 10, 30, 0.9), rgba(0, 0, 20, 0.95));
}

/* Glassmorphism Content */
/* Glassmorphism Content */
.content {
  position: absolute;
  z-index: 2;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 255, 255, 0.2);
  transition: transform 0.3s ease-in-out;

  left: 10%; /* Adjust this value based on your background image */
  top: 45%;
  transform: translateY(-50%);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .content {
    left: 10%; /* Adjust position for smaller screens */
  }
}

@media (max-width: 768px) {
  .content {
    left: 5%;
    max-width: 90%;
  }
}



/* Futuristic Heading */
h1 {
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
}

h1 span {
  color: #0ff;
  text-shadow: 0 0 10px #0ff, 0 0 20px #0ff;
}

/* Description */
.description {
  font-size: 1.2rem;
  margin: 15px 0;
}

/* Buttons */
.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.btn {
  padding: 12px 25px;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 50px;
  text-decoration: none;
  transition: 0.3s ease-in-out;
}

.primary {
  background: #0ff;
  color: black;
  box-shadow: 0 0 15px #0ff;
  transition: all 0.3s ease-in-out;
}

.secondary {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: white;
  backdrop-filter: blur(10px);
}

.primary:hover {
  background: #00cccc;
  box-shadow: 0 0 25px #0ff;
}

.secondary:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Background with Parallax Effect */
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150vh;
  background: url('/images/Profile_3.JPG') left/cover no-repeat;
  filter: brightness(50%) blur(5px);
  transition: filter 0.5s ease-in-out;
  z-index: 1;
}

.background:hover {
  filter: brightness(80%) blur(0px);
}

/* Responsive Design */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  .content {
    max-width: 90%;
  }

  .btn {
    font-size: 1rem;
  }
}
</style>