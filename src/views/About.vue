<template>
  <section class="about">
    <div class="about-container" data-aos="fade-up">
      <div class="about-content">
        <h2 class="neon-title">About Me</h2>
        <p class="description">
          I'm a passionate <strong>Web Developer & UI/UX Designer</strong> who thrives on crafting
          <strong>futuristic, immersive, and highly interactive</strong> digital experiences.
        </p>
        <div class="skills-grid">
          <div class="skill-card" v-for="(skill, index) in skills" :key="index">
            <font-awesome-icon :icon="skill.icon" class="skill-icon" />
            <h3>{{ skill.name }}</h3>
          </div>
        </div>
        <button @click="downloadResume" class="download-btn">Download Resume</button>
      </div>
    </div>
  </section>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faJs,
  faHtml5,
  faCss3Alt,
  faReact,
  faNode,
  faFlutter,
} from "@fortawesome/free-brands-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";

// Add icons to the library
library.add(faJs, faHtml5, faCss3Alt, faReact, faNode, faFlutter, faBrain);

export default {
  components: { FontAwesomeIcon },
  data() {
    return {
      skills: [
        { name: "JavaScript", icon: ["fab", "js"] },
        { name: "HTML", icon: ["fab", "html5"] },
        { name: "CSS & SCSS", icon: ["fab", "css3-alt"] },
        { name: "React", icon: ["fab", "react"] },
        { name: "Node.js", icon: ["fab", "node"] },
        { name: "Flutter", icon: ["fab", "flutter"] },
        { name: "OpenAI", icon: ["fas", "brain"] },
      ],
    };
  },
  methods: {
    downloadResume() {
      window.open("/images/resume.pdf", "_blank");
    },
  },
};
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #0a0a0a, #1b1b2b);
  padding: 50px;
  position: relative;
  overflow: hidden;
}

.about-container {
  display: flex;
  align-items: center;
  gap: 40px;
  max-width: 1100px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 50px;
  box-shadow: 0px 10px 30px rgba(0, 255, 255, 0.3);
  border: 2px solid rgba(0, 255, 255, 0.2);
}

.neon-title {
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 0 0 20px #00ffff;
  color: #00ffff;
}

.description {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #ddd;
  margin-bottom: 20px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin: 20px 0;
}

.skill-card {
  background: rgba(0, 255, 255, 0.1);
  padding: 20px;
  border-radius: 15px;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.skill-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
  background: rgba(0, 255, 255, 0.3);
}

.skill-icon {
  font-size: 3rem;
  margin-bottom: 10px;
  color: #00ffff;
}

.download-btn {
  padding: 12px 25px;
  font-size: 1.2rem;
  text-transform: uppercase;
  border-radius: 50px;
  background: rgba(0, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: white;
  border: 2px solid rgba(0, 255, 255, 0.5);
  transition: 0.3s ease-in-out;
  cursor: pointer;
}

.download-btn:hover {
  background: rgba(0, 255, 255, 0.4);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.7);
  transform: scale(1.1);
}
</style>
