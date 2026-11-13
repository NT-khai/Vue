<script setup lang="ts">
import { onMounted } from "vue";

import About from "../components/About.vue";
import Banner from "../components/Banner.vue";
import Footer from "../components/Footer.vue";
import NoiBat from "../components/NoiBat.vue";

onMounted(() => {
  const sections = document.querySelectorAll(".fade-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar">
      <h2 class="logo">🌸 Flower Shop</h2>

      <ul class="menu">
        <li>
          <a href="#">Trang chủ</a>
        </li>

        <li>
          <a href="#NoiBat"> Hoa nổi bật </a>
        </li>

        <li>
          <a href="#GioiThieu"> Giới thiệu </a>
        </li>

        <li>
          <a href="#LienHe"> Liên hệ </a>
        </li>
      </ul>
    </nav>

    <!-- Banner -->
    <section>
      <Banner />
    </section>

    <!-- Nổi bật -->
    <section id="NoiBat" class="fade-section">
      <NoiBat />
    </section>

    <!-- About -->
    <section id="GioiThieu" class="fade-section">
      <About />
    </section>

    <!-- Footer -->
    <footer id="LienHe" class="fade-section">
      <Footer />
    </footer>

    <!-- Back To Top -->
    <button class="back-top" @click="scrollTop">↑</button>
  </div>
</template>

<style scoped>
:global(html) {
  scroll-behavior: smooth;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* NAVBAR */

.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 18px 40px;

  background: rgba(255, 182, 193, 0.95);

  backdrop-filter: blur(12px);

  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
}

.logo {
  color: white;
}

.menu {
  display: flex;
  gap: 30px;

  list-style: none;
}

.menu a {
  text-decoration: none;
  color: white;

  font-weight: 600;

  position: relative;
}

.menu a::after {
  content: "";

  position: absolute;
  left: 0;
  bottom: -5px;

  height: 2px;
  width: 0;

  background: white;

  transition: 0.3s;
}

.menu a:hover::after {
  width: 100%;
}

/* SCROLL EFFECT */

.fade-section {
  opacity: 0;
  transform: translateY(80px);

  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}

.fade-section.show {
  opacity: 1;
  transform: translateY(0);
}

/* BACK TO TOP */

.back-top {
  position: fixed;

  right: 30px;
  bottom: 30px;

  width: 55px;
  height: 55px;

  border: none;
  border-radius: 50%;

  background: #e91e63;

  color: white;

  font-size: 22px;
  font-weight: bold;

  cursor: pointer;

  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);

  transition: 0.3s;

  z-index: 999;
}

.back-top:hover {
  transform: translateY(-5px) scale(1.1);

  background: #d81b60;
}

.back-top:active {
  transform: scale(0.95);
}

/* RESPONSIVE */

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 15px;
  }

  .menu {
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .back-top {
    right: 20px;
    bottom: 20px;

    width: 45px;
    height: 45px;
  }
}
</style>
