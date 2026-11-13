<template>
  <div class="ct-page">
    <section v-if="product" class="ct-section">
      <div class="ct-container">
        <button class="back-btn" @click="goBack">← Quay lại sản phẩm</button>

        <div class="ct-card">
          <div class="ct-img">
            <span class="emoji">{{ product.emoji }}</span>
            <span v-if="product.oldPrice" class="sale-tag">Giảm giá</span>
          </div>

          <div class="ct-info">
            <small class="category">{{ product.category }}</small>
            <h1>{{ product.name }}</h1>

            <div class="meta">
              <span>⭐ {{ product.rating }}</span>
              <span>Đã bán {{ product.sold }}</span>
              <span>Còn {{ product.stock }} sản phẩm</span>
            </div>

            <div class="price">
              <strong>{{ formatPrice(product.price) }}</strong>
              <del v-if="product.oldPrice">
                {{ formatPrice(product.oldPrice) }}
              </del>
            </div>

            <p class="desc">{{ product.description }}</p>

            <div class="meaning">
              {{ product.emoji }} Ý nghĩa: {{ product.meaning }}
            </div>

            <div class="qty">
              <span>Số lượng</span>
              <div class="qty-box">
                <button :disabled="quantity <= 1" @click="quantity--">−</button>
                <b>{{ quantity }}</b>
                <button
                  :disabled="quantity >= product.stock"
                  @click="quantity++"
                >
                  +
                </button>
              </div>
            </div>

            <div class="total">
              Tạm tính:
              <strong>{{ formatPrice(product.price * quantity) }}</strong>
            </div>

            <button class="add-btn" @click="handleAdd">
              🛒 Thêm vào giỏ hàng
            </button>

            <p v-if="added" class="added-msg">
              ✔ Đã thêm vào giỏ hàng! (Giỏ hiện có {{ cart.totalCount }} sản
              phẩm)
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Không tìm thấy -->
    <section v-else class="ct-section ct-empty">
      <h2>Không tìm thấy sản phẩm 🥀</h2>
      <router-link to="/sanpham" class="add-btn link"
        >Về trang sản phẩm</router-link
      >
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getProductById, formatPrice } from "../../mockData/Mockdata";
import { useCartStore } from "../../stores/cart.store";

const route = useRoute();
const router = useRouter();
const cart = useCartStore();

const product = computed(() => getProductById(Number(route.params.id)));

const quantity = ref(1);
const added = ref(false);
let timer: ReturnType<typeof setTimeout> | undefined;

// đổi sang sản phẩm khác thì reset
watch(
  () => route.params.id,
  () => {
    quantity.value = 1;
    added.value = false;
  },
);

const handleAdd = () => {
  if (!product.value) return;
  cart.addToCart(product.value, quantity.value);
  added.value = true;
  clearTimeout(timer);
  timer = setTimeout(() => (added.value = false), 2500);
};

const goBack = () => {
  router.push({ path: "/sanpham", query: { page: route.query.from || 1 } });
};
</script>

<style>
.ct-page {
  overflow-x: hidden;
}

.ct-section {
  min-height: 100vh;
  padding: 80px;
  background: linear-gradient(135deg, #fff0f5, #ffd9e8);
  animation: fadeIn 1s ease;
}

.ct-container {
  max-width: 1100px;
  margin: auto;
}

.back-btn {
  margin-bottom: 30px;
  padding: 10px 25px;
  border: none;
  border-radius: 50px;
  background: white;
  color: #e91e63;
  font-size: 15px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.08);
}

.back-btn:hover {
  transform: translateY(-3px);
}

.ct-card {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 40px;
  padding: 40px;
  border-radius: 20px;
  background: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.ct-img {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 380px;
  border-radius: 20px;
  background: linear-gradient(135deg, #fff0f5, #ffd9e8);
}

.ct-img .emoji {
  font-size: 10rem;
}

.ct-img .sale-tag {
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 6px 16px;
  border-radius: 50px;
  background: #e91e63;
  color: white;
  font-weight: 600;
}

.ct-info .category {
  color: #e91e63;
  font-weight: 600;
}

.ct-info h1 {
  margin: 8px 0 14px;
  font-size: 2.2rem;
  color: #e91e63;
}

.ct-info .meta {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  color: #666;
  font-size: 14px;
}

.ct-info .price {
  margin: 20px 0;
}

.ct-info .price strong {
  font-size: 2rem;
  color: #e91e63;
}

.ct-info .price del {
  margin-left: 10px;
  color: #aaa;
}

.desc {
  line-height: 1.7;
  color: #666;
}

.meaning {
  margin: 20px 0;
  padding: 15px 20px;
  border-left: 4px solid #e91e63;
  background: #fff7fa;
  color: #444;
}

.qty {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 15px;
}

.qty-box {
  display: flex;
  align-items: center;
  gap: 15px;
}

.qty-box button {
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 50%;
  background: #fff0f5;
  color: #e91e63;
  font-size: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.qty-box button:hover:not(:disabled) {
  background: #e91e63;
  color: white;
}

.qty-box button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.total {
  margin-bottom: 25px;
  color: #666;
}

.total strong {
  color: #e91e63;
  font-size: 1.3rem;
}

.add-btn {
  display: inline-block;
  padding: 15px 35px;
  border: none;
  border-radius: 50px;
  background: #e91e63;
  color: white;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;
}

.add-btn:hover {
  transform: translateY(-5px);
}

.added-msg {
  margin-top: 16px;
  color: #2e9e5b;
  font-weight: 600;
  animation: fadeIn 0.4s ease;
}

.ct-empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  text-align: center;
}

.ct-empty h2 {
  color: #e91e63;
}

@media (max-width: 900px) {
  .ct-section {
    padding: 40px 20px;
  }

  .ct-card {
    grid-template-columns: 1fr;
    padding: 25px;
  }
}
</style>
