<script setup>
import { computed, ref } from "vue";

const flowers = ref([
  { id: 1, name: "Hoa Hồng Đỏ", price: 150000, emoji: "🌹" },
  { id: 2, name: "Hoa Tulip", price: 180000, emoji: "🌷" },
  { id: 3, name: "Hoa Lan", price: 250000, emoji: "💐" },
  { id: 4, name: "Hoa Cúc", price: 120000, emoji: "🌼" },
  { id: 5, name: "Hoa Hướng Dương", price: 200000, emoji: "🌻" },
  { id: 6, name: "Hoa Ly", price: 220000, emoji: "🌸" },
  { id: 7, name: "Hoa Đồng Tiền", price: 140000, emoji: "🌺" },
  { id: 8, name: "Hoa Mẫu Đơn", price: 280000, emoji: "🌹" },
  { id: 9, name: "Hoa Oải Hương", price: 230000, emoji: "🪻" },
  { id: 10, name: "Hoa Sen", price: 170000, emoji: "🪷" },
  { id: 11, name: "Hoa Mai", price: 190000, emoji: "🌼" },
  { id: 12, name: "Hoa Đào", price: 210000, emoji: "🌸" },
  { id: 13, name: "Hoa Baby", price: 160000, emoji: "💮" },
  { id: 14, name: "Hoa Cẩm Tú", price: 240000, emoji: "🌺" },
  { id: 15, name: "Hoa Cẩm Chướng", price: 180000, emoji: "🌷" },
]);

const currentPage = ref(1);
const perPage = 5;

const totalPages = computed(() => Math.ceil(flowers.value.length / perPage));

const paginatedFlowers = computed(() => {
  const start = (currentPage.value - 1) * perPage;

  return flowers.value.slice(start, start + perPage);
});

const selectedFlower = ref(null);

const openModal = (flower) => {
  selectedFlower.value = flower;
};

const closeModal = () => {
  selectedFlower.value = null;
};
</script>

<template>
  <section class="highlight">
    <h2>🌸 Hoa Nổi Bật</h2>

    <div class="grid">
      <div
        v-for="flower in paginatedFlowers"
        :key="flower.id"
        class="card"
        @click="openModal(flower)"
      >
        <div class="emoji">
          {{ flower.emoji }}
        </div>

        <h3>{{ flower.name }}</h3>

        <p>{{ flower.price.toLocaleString() }}₫</p>
      </div>
    </div>

    <div class="pagination">
      <button @click="currentPage--" :disabled="currentPage === 1">←</button>

      <button
        v-for="page in totalPages"
        :key="page"
        @click="currentPage = page"
        :class="{ active: page === currentPage }"
      >
        {{ page }}
      </button>

      <button @click="currentPage++" :disabled="currentPage === totalPages">
        →
      </button>
    </div>

    <div v-if="selectedFlower" class="overlay" @click="closeModal">
      <div class="modal" @click.stop>
        <div class="big">
          {{ selectedFlower.emoji }}
        </div>

        <h2>{{ selectedFlower.name }}</h2>

        <p>{{ selectedFlower.price.toLocaleString() }}₫</p>

        <button @click="closeModal">Đóng</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.highlight {
  padding: 100px 80px;
  background: linear-gradient(to bottom, #fff, #fff5f8);
}

.highlight h2 {
  text-align: center;
  font-size: 3rem;
  color: #e91e63;
  margin-bottom: 60px;
  position: relative;
}

.highlight h2::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -15px;
  transform: translateX(-50%);

  width: 100px;
  height: 4px;

  border-radius: 10px;
  background: #e91e63;
}

/* Grid */

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  gap: 30px;
}

/* Card */

.card {
  background: white;
  border-radius: 24px;

  padding: 30px 20px;

  text-align: center;

  cursor: pointer;

  overflow: hidden;

  transition: all 0.35s ease;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  position: relative;
}

.card::before {
  content: "";

  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 6px;

  background: linear-gradient(90deg, #ff9dbb, #e91e63);
}

.card:hover {
  transform: translateY(-10px) scale(1.03);

  box-shadow: 0 20px 40px rgba(233, 30, 99, 0.2);
}

.card h3 {
  margin-top: 15px;
  color: #333;
}

.card p {
  color: #e91e63;
  font-size: 18px;
  font-weight: 700;
}

/* Hoa */

.emoji {
  font-size: 90px;

  transition: 0.4s;
}

.card:hover .emoji {
  transform: rotate(10deg) scale(1.15);
}

/* Pagination */

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 12px;

  margin-top: 50px;
}

.pagination button {
  width: 45px;
  height: 45px;

  border: none;
  border-radius: 12px;

  cursor: pointer;

  background: white;

  font-weight: bold;

  transition: 0.3s;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.pagination button:hover {
  transform: translateY(-3px);

  background: #ffe4ec;
}

.pagination button.active {
  background: #e91e63;
  color: white;
}

/* Modal */

.overlay {
  position: fixed;
  inset: 0;

  z-index: 9999;

  backdrop-filter: blur(8px);

  background: rgba(0, 0, 0, 0.55);

  display: flex;
  justify-content: center;
  align-items: center;

  animation: fadeIn 0.3s ease;
}

.modal {
  width: 420px;

  padding: 35px;

  border-radius: 25px;

  text-align: center;

  background: white;

  animation: popup 0.3s ease;
}

.modal h2 {
  color: #333;
  margin-bottom: 10px;
}

.modal p {
  color: #666;
  font-size: 18px;
  font-weight: 600;
}

.modal button {
  margin-top: 20px;

  border: none;

  padding: 12px 25px;

  border-radius: 30px;

  background: #e91e63;
  color: white;

  cursor: pointer;

  transition: 0.3s;
}

.modal button:hover {
  transform: scale(1.05);
}

.big {
  font-size: 160px;

  animation: flowerFloat 2s ease-in-out infinite;
}

/* Animations */

@keyframes zoom {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.15);
  }
}

@keyframes popup {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(30px);
  }

  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes flowerFloat {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-15px) rotate(8deg);
  }
}

/* Responsive */

@media (max-width: 768px) {
  .highlight {
    padding: 70px 20px;
  }

  .highlight h2 {
    font-size: 2rem;
  }

  .modal {
    width: 95%;
  }

  .big {
    font-size: 120px;
  }
}
</style>
