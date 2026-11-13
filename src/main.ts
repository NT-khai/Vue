import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.ts";
import { createPinia } from "pinia";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  once: true,
});
createApp(App).use(router).use(createPinia()).mount("#app");
