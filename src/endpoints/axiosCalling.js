import axios from 'axios'
import { useAuthStore } from '../stores/AuthStore.js'

const baseUrl = 'http://localhost:3000'

export const apiCall = async (method, url, data) => {
  const auth = useAuthStore()
  console.log(auth.authToken);
  try {
    const response = await axios({
      method,
      url: `${baseUrl}/${url}`,
      headers: authHeader(auth),
      data
    })

    return response.data
  } catch (error) {
    if (error.response) {
      if ([401, 403].includes(error.response.status) && auth.authToken) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        // auth.logout()
      }
      return error.response.data
    } else if (error.request) {
      // Request made but no response is received from the server.
      console.log(error.request)
    } else {
      // Error occured while setting up the request
      console.log('Error', error.message)
    }
  }
}

// helper functions
function authHeader(auth) {
  // return auth header with jwt if user is logged in and request is to the api url
  const isLoggedIn = !!auth?.authToken
  // const isApiUrl = '' //url.startsWith(import.meta.env.VITE_API_URL)
  if (isLoggedIn) {
    return { Authorization: `Bearer ${auth.authToken}` }
  } else {
    return {}
  }
}
