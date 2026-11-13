<template>
  <section class="about">
    <div class="about-content">
      <div class="left">
        <span class="tag">🌸 Về chúng tôi</span>

        <h2>
          Flower Shop<br />
          Gửi Gắm Yêu Thương Qua Từng Bó Hoa
        </h2>

        <p>
          Chúng tôi cung cấp những bó hoa tươi được tuyển chọn mỗi ngày, mang
          đến vẻ đẹp và niềm vui cho mọi dịp đặc biệt của bạn.
        </p>

        <router-link to="/About" id="timhieuthem">Tìm hiểu thêm</router-link>
      </div>

      <div class="right">
        <div class="image-card main-card">🌹</div>

        <div class="image-card small-card">🌷</div>
      </div>
    </div>

    <div class="stats">
      <div class="stat-card">
        <h3>5000+</h3>
        <p>Khách hàng</p>
      </div>

      <div class="stat-card">
        <h3>15+</h3>
        <p>Loại hoa nổi bật</p>
      </div>

      <div class="stat-card">
        <h3>4.9★</h3>
        <p>Đánh giá</p>
      </div>

      <div class="stat-card">
        <h3>100%</h3>
        <p>Hoa tươi mỗi ngày</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 100px 80px;
  background: linear-gradient(to bottom, #fff, #fff5f8);
}

.about-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
}

.left {
  flex: 1;
  animation: slideLeft 1s ease;
}

.tag {
  display: inline-block;
  background: #ffe6ef;
  color: #e91e63;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  margin-bottom: 20px;
}

.left h2 {
  font-size: 42px;
  margin-bottom: 20px;
  color: #333;
}

.left p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 25px;
}

.left #timhieuthem {
  padding: 12px 30px;
  border: none;
  border-radius: 30px;
  background: #e91e63;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;
}

.left #timhieuthem:hover {
  transform: translateY(-3px);
}

.right {
  flex: 1;
  position: relative;
  height: 350px;

  animation: slideRight 1s ease;
}

.image-card {
  display: flex;
  align-items: center;
  justify-content: center;

  background: white;

  border-radius: 25px;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.main-card {
  width: 260px;
  height: 260px;
  font-size: 120px;

  animation: floating 3s ease-in-out infinite;
}

.small-card {
  width: 150px;
  height: 150px;

  position: absolute;
  right: 20px;
  bottom: 20px;

  font-size: 80px;

  animation: floating 4s ease-in-out infinite;
}

.stats {
  margin-top: 80px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.stat-card {
  background: white;

  padding: 30px;

  border-radius: 20px;

  text-align: center;

  transition: 0.3s;

  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.stat-card:hover {
  transform: translateY(-10px);
}

.stat-card h3 {
  color: #e91e63;
  font-size: 32px;
}

.stat-card p {
  margin-top: 10px;
  color: #666;
}

@keyframes floating {
  50% {
    transform: translateY(-15px);
  }
}

@keyframes slideLeft {
  from {
    opacity: 0;
    transform: translateX(-80px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideRight {
  from {
    opacity: 0;
    transform: translateX(80px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .about {
    padding: 60px 20px;
  }

  .about-content {
    flex-direction: column;
  }

  .stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .left h2 {
    font-size: 30px;
  }
}
</style>
