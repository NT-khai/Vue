<template>
  <div class="sp-page">
    <!-- Hero -->
    <section class="sp-hero">
      <h1>🌸 Sản Phẩm Của Flower Shop</h1>
      <p>Chọn bó hoa hoàn hảo để thay lời muốn nói.</p>
      <div class="cart-badge">🛒 Giỏ hàng: {{ cart.totalCount }}</div>
    </section>

    <!-- Danh sách -->
    <section class="sp-section">
      <div class="sp-container">
        <h2>Tất Cả Sản Phẩm ({{ products.length }})</h2>

        <div class="product-grid">
          <div
            v-for="p in pagedProducts"
            :key="p.id"
            class="product-card"
            :class="{ active: selectedId === p.id }"
            @click="selectedId = selectedId === p.id ? null : p.id"
          >
            <div class="product-img">
              <span class="emoji">{{ p.emoji }}</span>
              <span v-if="p.oldPrice" class="sale-tag">Giảm giá</span>
            </div>

            <div class="product-info">
              <small class="category">{{ p.category }}</small>
              <h3>{{ p.name }}</h3>

              <div class="meta">
                <span>⭐ {{ p.rating }}</span>
                <span>Đã bán {{ p.sold }}</span>
              </div>

              <div class="price">
                <strong>{{ formatPrice(p.price) }}</strong>
                <del v-if="p.oldPrice">{{ formatPrice(p.oldPrice) }}</del>
              </div>

              <button class="detail-btn" @click.stop="goDetail(p.id)">
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>

        <!-- Phân trang -->
        <div class="pagination">
          <button :disabled="page === 1" @click="goPage(page - 1)">‹</button>

          <button
            v-for="n in totalPages"
            :key="n"
            :class="{ current: n === page }"
            @click="goPage(n)"
          >
            {{ n }}
          </button>

          <button :disabled="page === totalPages" @click="goPage(page + 1)">
            ›
          </button>
        </div>

        <p class="page-info">
          Hiển thị {{ startIndex + 1 }}–{{
            Math.min(startIndex + pageSize, products.length)
          }}
          / {{ products.length }} sản phẩm
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { products, formatPrice } from "../../mockData/Mockdata";
import { useCartStore } from "../../stores/cart.store";

const route = useRoute();
const router = useRouter();
const cart = useCartStore();

const pageSize = 8;
const totalPages = Math.ceil(products.length / pageSize);

// giữ số trang trên URL (?page=2) để quay lại từ trang chi tiết vẫn đúng trang
const readPage = () => {
  const n = Number(route.query.page) || 1;
  return Math.min(Math.max(n, 1), totalPages);
};

const page = ref(readPage());
const selectedId = ref<number | null>(null);

watch(
  () => route.query.page,
  () => {
    page.value = readPage();
    selectedId.value = null;
  },
);

const startIndex = computed(() => (page.value - 1) * pageSize);

const pagedProducts = computed(() =>
  products.slice(startIndex.value, startIndex.value + pageSize),
);

const goPage = (n: number) => {
  router.push({ query: { page: n } });
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const goDetail = (id: number) => {
  router.push({
    name: "sanpham-chitiet",
    params: { id },
    query: { from: page.value },
  });
};
</script>

<style>
.sp-page {
  overflow-x: hidden;
}

.sp-hero {
  padding: 100px 20px 80px;
  text-align: center;
  background: linear-gradient(135deg, #fff0f5, #ffd9e8);
  animation: fadeIn 1s ease;
}

.sp-hero h1 {
  font-size: 3.2rem;
  color: #e91e63;
}

.sp-hero p {
  margin-top: 16px;
  font-size: 1.2rem;
  color: #666;
}

.cart-badge {
  display: inline-block;
  margin-top: 25px;
  padding: 10px 25px;
  border-radius: 50px;
  background: #e91e63;
  color: white;
  font-weight: 600;
}

.sp-section {
  padding: 80px 80px 100px;
  background: #fff7fa;
}

.sp-container {
  max-width: 1200px;
  margin: auto;
}

.sp-container h2 {
  text-align: center;
  margin-bottom: 50px;
  color: #e91e63;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
}

.product-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: 0.4s;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}

.product-card:hover,
.product-card.active {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.product-card.active {
  border-color: #e91e63;
}

.product-img {
  position: relative;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #fff0f5, #ffd9e8);
}

.product-img .emoji {
  font-size: 5rem;
}

.sale-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 12px;
  border-radius: 50px;
  background: #e91e63;
  color: white;
  font-size: 12px;
  font-weight: 600;
}

.product-info {
  padding: 20px;
  text-align: center;
}

.product-info .category {
  color: #e91e63;
  font-weight: 600;
}

.product-info h3 {
  margin: 6px 0 10px;
}

.meta {
  display: flex;
  justify-content: center;
  gap: 15px;
  font-size: 14px;
  color: #666;
}

.price {
  margin: 12px 0 15px;
}

.price strong {
  font-size: 1.2rem;
  color: #e91e63;
}

.price del {
  margin-left: 8px;
  color: #aaa;
  font-size: 14px;
}

/* Nút chỉ hiện khi hover hoặc khi bấm chọn thẻ */
.detail-btn {
  width: 100%;
  padding: 12px 0;
  border: none;
  border-radius: 50px;
  background: #e91e63;
  color: white;
  font-size: 15px;
  cursor: pointer;
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
  overflow: hidden;
  transition: 0.3s;
}

.product-card:hover .detail-btn,
.product-card.active .detail-btn {
  opacity: 1;
  max-height: 50px;
  padding: 12px 0;
}

.detail-btn:hover {
  transform: translateY(-3px);
}

/* Phân trang */
.pagination {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 60px;
}

.pagination button {
  min-width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  background: white;
  color: #e91e63;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.08);
}

.pagination button:hover:not(:disabled) {
  transform: translateY(-3px);
}

.pagination button.current {
  background: #e91e63;
  color: white;
}

.pagination button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.page-info {
  margin-top: 20px;
  text-align: center;
  color: #666;
}

@media (max-width: 768px) {
  .sp-section {
    padding: 60px 20px;
  }

  .sp-hero h1 {
    font-size: 2.2rem;
  }
}
</style>
