<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Giới thiệu -->
      <div class="footer-section">
        <h2>🌸 Flower Shop</h2>

        <p>
          Mang yêu thương đến mọi nhà với những bó hoa tươi được tuyển chọn mỗi
          ngày.
        </p>
      </div>

      <!-- Menu -->
      <div class="footer-section">
        <h3>Liên kết</h3>

        <ul>
          <li><a href="#">Trang chủ</a></li>
          <li><a href="#GioiThieu">Giới thiệu</a></li>
          <li><a href="#NoiBat">Sản phẩm</a></li>
          <li><a href="#LienHe">Liên hệ</a></li>
        </ul>
      </div>

      <!-- Liên hệ -->
      <div class="footer-section">
        <h3>Liên hệ</h3>

        <p>📍 Cần Thơ, Việt Nam</p>
        <p>📞 0123 456 789</p>
        <p>📧 flowershop@gmail.com</p>
      </div>

      <!-- Mạng xã hội -->
      <div class="footer-section">
        <h3>Theo dõi</h3>

        <div class="social">
          <a href="#">🌐</a>
          <a href="#">📘</a>
          <a href="#">📷</a>
          <a href="#">🎵</a>
        </div>
      </div>
    </div>

    <div class="copyright">© 2025 Flower Shop</div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, #ff8cb4, #e91e63);

  color: white;

  margin-top: 80px;
}

.footer-container {
  padding: 60px 80px;

  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;

  gap: 40px;
}

.footer-section h2,
.footer-section h3 {
  margin-bottom: 20px;
}

.footer-section p {
  line-height: 1.8;
}

.footer-section ul {
  list-style: none;
}

.footer-section li {
  margin-bottom: 10px;
}

.footer-section a {
  color: white;
  text-decoration: none;

  transition: 0.3s;
}

.footer-section a:hover {
  padding-left: 5px;
}

.social {
  display: flex;
  gap: 15px;
}

.social a {
  width: 45px;
  height: 45px;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(255, 255, 255, 0.2);

  font-size: 20px;

  transition: 0.3s;
}

.social a:hover {
  transform: translateY(-5px);
  background: white;
  color: #e91e63;
}

.copyright {
  text-align: center;
  padding: 20px;

  border-top: 1px solid rgba(255, 255, 255, 0.2);

  font-size: 14px;
}

@media (max-width: 992px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .footer-container {
    padding: 40px 20px;
    grid-template-columns: 1fr;
  }
}
</style>
