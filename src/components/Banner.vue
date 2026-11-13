<template>
  <section class="banner">
    <!-- Hoa bay -->

    <div class="floating flower-1">🌸</div>
    <div class="floating flower-2">🌷</div>
    <div class="floating flower-3">🌺</div>
    <div class="floating flower-4">🌹</div>
    <div class="floating flower-5">💐</div>

    <!-- Nội dung -->

    <div class="content">
      <span class="subtitle"> 🌸 Flower Shop </span>

      <h1>
        Hoa Tươi Cho
        <span>Mọi Khoảnh Khắc</span>
      </h1>

      <p>
        Mang yêu thương đến những người thân yêu với những bó hoa được tuyển
        chọn tươi mới mỗi ngày.
      </p>

      <router-link to="/sanpham" class="btn-buy"> Mua ngay 🌷 </router-link>
    </div>
  </section>
</template>

<style scoped>
.banner {
  position: relative;

  width: 100%;
  min-height: 100vh;

  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(135deg, #fff0f5 0%, #ffe6f0 50%, #ffd0e3 100%);
}

/* Nền động */

.banner::before {
  content: "";

  position: absolute;
  inset: 0;

  background:
    radial-gradient(
      circle at 20% 20%,
      rgba(255, 255, 255, 0.5),
      transparent 30%
    ),
    radial-gradient(
      circle at 80% 60%,
      rgba(255, 255, 255, 0.4),
      transparent 25%
    );

  animation: pulse 8s infinite ease-in-out;
}

.content {
  position: relative;

  z-index: 2;

  max-width: 900px;

  padding: 20px;

  text-align: center;

  animation: fadeUp 1s ease;
}

.subtitle {
  display: inline-block;

  padding: 10px 20px;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.5);

  color: #e91e63;

  font-weight: 600;

  margin-bottom: 25px;
}

h1 {
  font-size: 5rem;
  line-height: 1.2;

  color: #333;

  margin-bottom: 20px;
}

h1 span {
  color: #e91e63;
}

p {
  max-width: 700px;

  margin: 0 auto 40px;

  font-size: 1.3rem;
  line-height: 1.8;

  color: #555;
}

.btn-buy {
  display: inline-block;

  padding: 16px 42px;

  border-radius: 50px;

  text-decoration: none;

  background: #e91e63;
  color: white;

  font-size: 18px;
  font-weight: bold;

  transition: all 0.3s ease;
}

.btn-buy:hover {
  transform: translateY(-5px);

  box-shadow: 0 15px 35px rgba(233, 30, 99, 0.35);
}

/* Hoa bay */

.floating {
  position: absolute;

  font-size: 60px;

  opacity: 0.25;
}

/* Top Left */
.flower-1 {
  top: 15%;
  left: 10%;

  animation: float 6s infinite ease-in-out;
}

/* Top Right */
.flower-2 {
  top: 20%;
  right: 15%;

  animation: float 7s infinite ease-in-out;
}

/* Bottom Left */
.flower-3 {
  bottom: 15%;
  left: 15%;

  animation: float 8s infinite ease-in-out;
}

/* Center Right */
.flower-4 {
  top: 60%;
  right: 10%;

  animation: float 7s infinite ease-in-out;
}

/* Bottom Right */
.flower-5 {
  bottom: 10%;
  right: 25%;

  animation: float 9s infinite ease-in-out;
}

/* Animations */

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-25px) rotate(15deg);
  }

  100% {
    transform: translateY(0) rotate(0deg);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.08);
  }

  100% {
    transform: scale(1);
  }
}

/* Responsive */

@media (max-width: 992px) {
  h1 {
    font-size: 4rem;
  }
}

@media (max-width: 768px) {
  .banner {
    padding: 0 20px;
  }

  h1 {
    font-size: 2.8rem;
  }

  p {
    font-size: 1rem;
  }

  .floating {
    font-size: 35px;
  }

  .btn-buy {
    padding: 14px 30px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 2.2rem;
  }

  .subtitle {
    font-size: 14px;
  }

  p {
    font-size: 15px;
  }
}
</style>
