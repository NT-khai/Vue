<template>
  <div class="about-page">
    <!-- Hero -->

    <section class="hero">
      <div class="hero-content">
        <h1>🌸 Câu Chuyện Của Những Bông Hoa</h1>

        <p>
          Mỗi bông hoa không chỉ mang vẻ đẹp tự nhiên mà còn chứa đựng những câu
          chuyện, cảm xúc và giá trị tinh thần qua hàng nghìn năm lịch sử.
        </p>
      </div>
    </section>

    <!-- Lịch sử -->

    <section class="section">
      <div class="container">
        <h2>Lịch Sử Của Hoa</h2>

        <p>
          Hoa đã xuất hiện trên Trái Đất cách đây hơn 140 triệu năm. Từ thời Ai
          Cập cổ đại, Hy Lạp, La Mã cho tới ngày nay, hoa luôn là biểu tượng của
          vẻ đẹp, tình yêu và sự tôn kính.
        </p>
      </div>
    </section>

    <!-- Nguồn gốc -->

    <section class="section bg-light">
      <div class="container">
        <h2>Nguồn Gốc Các Loài Hoa Nổi Tiếng</h2>

        <div class="origin-grid">
          <div class="origin-card">
            🌹
            <h3>Hoa Hồng</h3>
            <p>Xuất phát từ Châu Á và Trung Đông.</p>
          </div>

          <div class="origin-card">
            🌷
            <h3>Tulip</h3>
            <p>Có nguồn gốc từ Trung Á và Thổ Nhĩ Kỳ.</p>
          </div>

          <div class="origin-card">
            🌻
            <h3>Hướng Dương</h3>
            <p>Nguồn gốc từ Bắc Mỹ.</p>
          </div>

          <div class="origin-card">
            🪷
            <h3>Hoa Sen</h3>
            <p>Biểu tượng văn hóa phương Đông.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Ý nghĩa -->

    <section class="section">
      <div class="container">
        <h2>Ý Nghĩa Của Các Loài Hoa</h2>

        <div class="meaning-grid">
          <div class="meaning-card">
            🌹
            <h3>Tình Yêu</h3>
          </div>

          <div class="meaning-card">
            🌻
            <h3>Hy Vọng</h3>
          </div>

          <div class="meaning-card">
            🪷
            <h3>Sự Thanh Khiết</h3>
          </div>

          <div class="meaning-card">
            🌷
            <h3>Hạnh Phúc</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Giá trị -->

    <section class="section bg-light">
      <div class="container">
        <h2>Hoa Mang Lại Điều Gì Cho Xã Hội?</h2>

        <div class="value-grid">
          <div class="value-card">
            ❤️
            <h3>Kết Nối Cảm Xúc</h3>
            <p>Giúp con người bày tỏ tình cảm.</p>
          </div>

          <div class="value-card">
            😊
            <h3>Lan Tỏa Niềm Vui</h3>
            <p>Tạo cảm giác tích cực và hạnh phúc.</p>
          </div>

          <div class="value-card">
            🌎
            <h3>Bảo Vệ Môi Trường</h3>
            <p>Góp phần cân bằng hệ sinh thái.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->

    <section class="section">
      <div class="container">
        <h2>Hành Trình Flower Shop</h2>

        <div class="timeline">
          <div class="timeline-item">
            <span>2018</span>
            <p>Khởi đầu cửa hàng đầu tiên.</p>
          </div>

          <div class="timeline-item">
            <span>2020</span>
            <p>Mở rộng dịch vụ giao hoa.</p>
          </div>

          <div class="timeline-item">
            <span>2025</span>
            <p>Phục vụ hơn {{ Math.floor(customers) }} khách hàng.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->

    <section class="stats">
      <div class="stat">
        <h2>{{ Math.floor(customers) }}+</h2>
        <p>Khách Hàng</p>
      </div>

      <div class="stat">
        <h2>{{ Math.floor(flowers) }}+</h2>
        <p>Loài Hoa</p>
      </div>

      <div class="stat">
        <h2>{{ Math.floor(satisfaction) }}%</h2>
        <p>Hài Lòng</p>
      </div>
    </section>

    <!-- CTA -->

    <section class="cta">
      <h2>Hãy Để Hoa Thay Lời Muốn Nói</h2>

      <router-link to="/sanpham" class="cta-btn"> Khám Phá Ngay </router-link>
    </section>
  </div>
</template>

<style>
.about-page {
  overflow-x: hidden;
}

.hero {
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  background: linear-gradient(135deg, #fff0f5, #ffd9e8);

  animation: fadeIn 1s ease;
}

.hero-content {
  max-width: 900px;
}

.hero h1 {
  font-size: 4rem;
  color: #e91e63;
}

.hero p {
  margin-top: 20px;

  font-size: 1.3rem;

  color: #666;
}

.section {
  padding: 100px 80px;
}

.bg-light {
  background: #fff7fa;
}

.container {
  max-width: 1200px;
  margin: auto;
}

.container h2 {
  text-align: center;

  margin-bottom: 50px;

  color: #e91e63;
}

.origin-grid,
.meaning-grid,
.value-grid {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  gap: 25px;
}

.origin-card,
.meaning-card,
.value-card {
  background: white;

  padding: 30px;

  border-radius: 20px;

  text-align: center;

  transition: 0.4s;

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}

.origin-card:hover,
.meaning-card:hover,
.value-card:hover {
  transform: translateY(-10px);

  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.timeline {
  max-width: 800px;
  margin: auto;
}

.timeline-item {
  position: relative;

  padding: 25px;

  margin-bottom: 30px;

  border-left: 4px solid #e91e63;

  background: #fff7fa;
}

.timeline-item span {
  color: #e91e63;

  font-weight: bold;

  font-size: 18px;
}

.stats {
  display: flex;

  justify-content: center;
  gap: 60px;

  padding: 80px 20px;

  background: #e91e63;
}

.stat {
  text-align: center;
  color: white;
}

.stat h2 {
  font-size: 3rem;
}

.cta {
  padding: 120px 20px;

  text-align: center;
}

.cta h2 {
  margin-bottom: 30px;
}

.cta-btn {
  display: inline-block;

  padding: 15px 35px;

  border-radius: 50px;

  text-decoration: none;

  background: #e91e63;
  color: white;

  transition: 0.3s;
}

.cta-btn:hover {
  transform: translateY(-5px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
<script setup lang="ts">
import { onMounted, ref } from "vue";

const customers = ref(0);
const flowers = ref(0);
const satisfaction = ref(0);

const animateValue = (target: number, valueRef: any, duration = 2000) => {
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    valueRef.value += increment;

    if (valueRef.value >= target) {
      valueRef.value = target;
      clearInterval(timer);
    }
  }, 16);
};

onMounted(() => {
  animateValue(5000, customers);
  animateValue(15, flowers);
  animateValue(98, satisfaction);
});
</script>
