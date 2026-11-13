import { computed, ref, watch } from "vue";
import { defineStore } from "pinia";
import type { Product } from "../mockData/Mockdata";

export interface CartItem {
  product: Product;
  quantity: number;
}

const STORAGE_KEY = "flower-shop-cart";

const load = (): CartItem[] => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
};

export const useCartStore = defineStore("cart", () => {
  // state
  const items = ref<CartItem[]>(load());

  // getters
  const totalCount = computed(() =>
    items.value.reduce((sum, i) => sum + i.quantity, 0),
  );

  const totalPrice = computed(() =>
    items.value.reduce((sum, i) => sum + i.quantity * i.product.price, 0),
  );

  // actions
  const addToCart = (product: Product, quantity = 1) => {
    const existing = items.value.find((i) => i.product.id === product.id);
    if (existing) {
      existing.quantity = Math.min(existing.quantity + quantity, product.stock);
    } else {
      items.value.push({
        product,
        quantity: Math.min(quantity, product.stock),
      });
    }
  };

  const updateQuantity = (id: number, quantity: number) => {
    const item = items.value.find((i) => i.product.id === id);
    if (!item) return;
    if (quantity <= 0) return removeFromCart(id);
    item.quantity = Math.min(quantity, item.product.stock);
  };

  const removeFromCart = (id: number) => {
    items.value = items.value.filter((i) => i.product.id !== id);
  };

  const clearCart = () => {
    items.value = [];
  };

  // lưu localStorage mỗi khi giỏ thay đổi
  watch(
    items,
    (val) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(val));
      } catch {
        /* bỏ qua */
      }
    },
    { deep: true },
  );

  return {
    items,
    totalCount,
    totalPrice,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  };
});
