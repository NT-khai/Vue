import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import SanPham from "../pages/Home/SanPham.vue";
import About from "../pages/Home/About.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/sanpham",
      component: SanPham,
    },
    {
      path: "/About",
      component: About,
    },

    {
      path: "/sanpham",
      name: "sanpham",
      component: () => import("../pages/Home/SanPham.vue"),
    },
    {
      path: "/sanpham/:id",
      name: "sanpham-chitiet",
      component: () => import("../pages/Home/Sanphamchitiet.vue"),
    },
  ],
});

export default router;
