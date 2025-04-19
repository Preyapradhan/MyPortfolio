<template>
  <div id="app">
    <div class="cursor" ref="cursor"></div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar
  },
  mounted() {
    document.addEventListener("mousemove", this.moveCursor);
  },
  methods: {
    moveCursor(event) {
      const cursor = this.$refs.cursor;
      if (cursor) {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
      }
    }
  }
};
</script>
