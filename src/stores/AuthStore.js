import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAuthStore = defineStore('authStore', () => {
  const authToken = ref(localStorage.getItem('token'))

  const isLoggedIn = computed(() => {
    return authToken.value ? true : false
  })

  function setToken(token) {
    authToken.value = token
    localStorage.setItem('token', token)
  }

  function logout() {
    authToken.value = null
    localStorage.removeItem('token')
  }

  return { authToken, setToken, isLoggedIn, logout }
})
