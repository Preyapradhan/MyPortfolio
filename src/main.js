// main.js (entry file)
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import './assets/styles.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
// Import Font Awesome core
import { library } from '@fortawesome/fontawesome-svg-core';

// Import specific icons
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

// Import FontAwesome Vue component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add icons to the library
library.add(faLinkedin, faGithub, faTwitter);

AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
});

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');

// Advanced Cursor Effects
document.addEventListener("mousemove", (event) => {
  const cursor = document.querySelector(".cursor");
  gsap.to(cursor, {
    x: event.clientX,
    y: event.clientY,
    duration: 0.1,
    ease: "power2.out",
  });
});

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar?.classList.toggle("scrolled", window.scrollY > 50);
});