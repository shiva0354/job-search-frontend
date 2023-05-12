import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAuthStore = defineStore('authStore', () => {
  const token = localStorage.getItem('token')
  const token_time = localStorage.getItem('token_time')
  const current_time = Date.now()

  const diff = (token_time - current_time) /(1000*3600)
  const authToken = diff < 2 ? ref(token) : null

  const isLoggedIn = computed(() => {
    return authToken.value ? true : false
  })

  function setToken(token) {
    authToken.value = token
    localStorage.setItem('token', token)
    localStorage.setItem('token_time', Date.now())
  }

  function logout() {
    authToken.value = null
    localStorage.removeItem('token')
  }

  return { authToken, setToken, isLoggedIn, logout }
})
