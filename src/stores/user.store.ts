import { defineStore } from "pinia";
import { ref } from "vue";
import type { UserInterface } from "../interfaces/User";

export const useUserStore = defineStore("user", () => {
  const user = ref<UserInterface | null>(null);

  function getUser(): string | null {
    if (!user.value) {
      return null;
    }
    return user.value.name;
  }

  function setUser(newUser: UserInterface): void {
    user.value = newUser;
  }

  return {
    user,
    getUser,
    setUser,
  };
});
