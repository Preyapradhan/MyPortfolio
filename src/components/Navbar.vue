<template>
  <nav :class="{ scrolled: isScrolled }">
    <div class="logo" @click="scrollToTop">MyPortfolio</div>

    <!-- Navigation Links -->
    <ul class="nav-links" :class="{ open: menuOpen }">
  <li v-for="(section, index) in sections" :key="index">
    <router-link 
      :to="section.path" 
      @click="closeMenu" 
      :class="{ active: activeSection === section.path }"
    >
      {{ section.name }}
    </router-link>
  </li>
</ul>


    <!-- Hamburger Menu -->
    <div class="hamburger" @click="toggleMenu" aria-label="Toggle menu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
  </nav>

  <!-- Mobile Navigation Overlay -->
  <div class="mobile-nav" :class="{ open: menuOpen }">
    <ul>
      <li v-for="(section, index) in sections" :key="index">
        <a
          :href="section.path"
          @click="setActive(section.path)"
          :class="{ active: activeSection === section.path }"
        >
          {{ section.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { useRoute } from "vue-router"; // Import Vue Router

export default {
  data() {
    return {
      isScrolled: false,
      menuOpen: false,
      sections: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" }
      ]
    };
  },
  computed: {
    activeSection() {
      return this.$route.path; // Dynamically track the current route
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
</script>


<style scoped>
/* Navigation Bar */
nav {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1400px;
  padding: 12px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
}

nav.scrolled {
  background: rgba(10, 10, 30, 0.9);
  box-shadow: 0px 4px 15px rgba(0, 255, 255, 0.3);
}

/* Logo */
.logo {
  font-size: 2rem;
  font-weight: bold;
  color: #0ff;
  cursor: pointer;
  letter-spacing: 1px;
  transition: transform 0.3s ease-in-out;
}

.logo:hover {
  transform: scale(1.1);
}

/* Navigation Links */
.nav-links {
  display: flex;
  gap: 25px;
}

.nav-links li {
  list-style: none;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 8px 12px;
  position: relative;
  transition: color 0.3s ease-in-out;
  font-weight: 500;
}

.nav-links a::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background: #0ff;
  bottom: -5px;
  left: 0;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.nav-links a:hover::after,
.nav-links a.active::after {
  transform: scaleX(1);
}

.nav-links a.active {
  color: #0ff;
}

/* Hamburger Menu */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.hamburger:hover {
  transform: scale(1.1);
}

.bar {
  width: 30px;
  height: 4px;
  background: white;
  margin: 5px 0;
  border-radius: 3px;
}

/* Mobile Navigation Overlay */
.mobile-nav {
  position: fixed;
  top: 0;
  right: -100%;
  width: 250px;
  height: 100vh;
  background: rgba(30, 30, 50, 0.95);
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: right 0.4s ease-in-out;
  box-shadow: -4px 0px 10px rgba(0, 255, 255, 0.3);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}

.mobile-nav.open {
  right: 0;
}

.mobile-nav ul {
  list-style: none;
  padding: 0;
}

.mobile-nav ul li {
  margin: 20px 0;
}

.mobile-nav ul a {
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
}

.mobile-nav ul a:hover {
  color: #0ff;
}

/* Responsive Design */
@media (max-width: 1024px) {
  nav {
    width: 95%;
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}
</style>
