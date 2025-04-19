<template>
  <section class="projects">
    <h2 data-aos="fade-up">My Projects</h2>

    <div class="filter-buttons" data-aos="fade-up">
      <button 
        v-for="category in categories" 
        :key="category" 
        @click="filterProjects(category)"
        :class="{ active: selectedCategory === category }"
      >
        {{ category }}
      </button>
    </div>

    <div class="project-container">
      <div 
        class="project-card" 
        v-for="(project, index) in filteredProjects" 
        :key="index"
      >
        <div class="carousel">
          <img :src="project.images[currentImageIndex[index]]" :alt="project.title" class="project-img" />
          <button class="prev" @click="prevImage(index)">&#10094;</button>
          <button class="next" @click="nextImage(index)">&#10095;</button>
        </div>

        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank" class="view-btn">View Project</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: "All",
      categories: ["All", "Web Apps", "UI/UX", "Mobile Apps"],
      projects: [
        {
          title: "Reddit Clone",
          description: "A Reddit clone with similar User Interface.",
          images: ["/images/project1-1.png", "/images/project1-2.png", "/images/project1-3.png"],
          category: "UI/UX",
          link: "https://github.com/Preyapradhan/Reddit-clone"
        },
        {
          title: "Library Management System",
          description: "A fully functional Library Management System.",
          images: ["/images/project2-1.png", "/images/project2-2.png"],
          category: "Web Apps",
          link: "https://github.com/Preyapradhan/Library-management-system"
        },
        {
          title: "Job Listing Dashboard UI",
          description: "A sleek dashboard UI for Jobs Listing.",
          images: ["/images/project3-1.png", "/images/project3-2.png"],
          category: "UI/UX",
          link: "https://dashboard.com"
        },
        {
          title: "Fun Quiz Application",
          description: "A real-time Biology Fun Gamified Quiz Application.",
          images: ["/images/project4-1.jpg", "/images/project4-2.jpg","/images/project4-3.jpg"],
          category: "Mobile Apps",
          link: "https://github.com/Preyapradhan/genetics-quiz-app"
        }
      ],
      currentImageIndex: []
    };
  },
  computed: {
    filteredProjects() {
      return this.selectedCategory === "All"
        ? this.projects
        : this.projects.filter(project => project.category === this.selectedCategory);
    }
  },
  methods: {
    filterProjects(category) {
      this.selectedCategory = category;
    },
    nextImage(index) {
      this.currentImageIndex[index] = (this.currentImageIndex[index] + 1) % this.projects[index].images.length;
    },
    prevImage(index) {
      this.currentImageIndex[index] = (this.currentImageIndex[index] - 1 + this.projects[index].images.length) % this.projects[index].images.length;
    }
  },
  created() {
    this.currentImageIndex = new Array(this.projects.length).fill(0);
  }
};
</script>

<style scoped>
.projects {
  text-align: center;
  padding: 60px;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  color: white;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.filter-buttons {
  margin-bottom: 30px;
}

.filter-buttons button {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-weight: bold;
  text-transform: uppercase;
}

.filter-buttons button.active,
.filter-buttons button:hover {
  background: #00d9ff;
  color: #0f172a;
  box-shadow: 0 0 15px #00d9ff;
}

.project-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.project-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 20px;
  max-width: 350px;
  text-align: center;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: rotateY(10deg) translateY(-10px) scale(1.05);
  box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.5);
}

/* Carousel Styling */
.carousel {
  position: relative;
  width: 100%;
}

.project-img {
  width: 100%;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
}

.project-card:hover .project-img {
  transform: scale(1.1);
}

button.prev,
button.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.3);
  color: white;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  transition: background 0.3s ease-in-out;
}

button.prev:hover,
button.next:hover {
  background: #00d9ff;
}

button.prev {
  left: 10px;
}

button.next {
  right: 10px;
}

.project-info h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #00d9ff;
}

.project-info p {
  font-size: 1rem;
  color: #ddd;
}

.view-btn {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 1rem;
  background: #00d9ff;
  color: #0f172a;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease-in-out, box-shadow 0.3s;
}

.view-btn:hover {
  background: #00aaff;
  box-shadow: 0 0 15px #00aaff;
}
</style>
