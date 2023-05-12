import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import JobListingPage from '../pages/JobListingPage.vue'
import LoginPage from '../pages/LoignPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import JobDetailPage from '../pages/JobDetailPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
// import { authenticated } from '../middlewares/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
      // meta: {
      //   middleware: [authenticated]
      // }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
    {
      path: '/job-listing',
      name: 'job-listing',
      component: JobListingPage
    },
    {
      path: '/job-detail/:jobid',
      name: 'job-detail',
      component: JobDetailPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NotFoundPage
    }
  ]
})

export default router
