import axios from 'axios'
import { apiCall } from './axiosCalling'

export const register = async ({ name, gender, mobile, email, password }) => {
  return await apiCall('post', 'register', { name:name, email:email, mobile:mobile, gender:gender, password:password })
}

export const login = async ({ email, password }) => {
  return await apiCall('post', 'login', { email: email, password: password })
}

export const changePassword = async ({ password, confirmedPassword }) => {
  return await apiCall('post', 'login', {
    confirmedPassword,
    password
  })
}
export const profileShow = async () => {
  return await apiCall('get', '/profile/show', {})
}

export const profileUpdate = async ({ name, email, mobile, gender }) => {
  return await apiCall('post', '/profiel/update', {
    name,
    email,
    gender,
    mobile
  })
}

export const uploadProfilePhoto = async () => {
  return await axios.post(`/profile/updload/photo`, {})
}

export const uploadResume = async () => {
  return await axios.post(`/profile/upload/resume`, {})
}

export const jobs = async () => {
  return await apiCall('get', 'jobs', {})
}

export const jobDetail = async ({ jobId }) => {
  return await apiCall('get', `/jobs/${jobId}`, {})
}

export const companyDetail = async ({ companyId }) => {
  return await apiCall('get', `/comanies/${companyId}`, {})
}

export const companyJobs = async ({ companyId }) => {
  return await apiCall('get', `/comanies/${companyId}/jobs`, {})
}
