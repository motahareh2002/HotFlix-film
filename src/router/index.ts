import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SignIn from '@/views/Authentication/SignIn.vue'
import SignUp from '@/views/Authentication/SignUp.vue'
import ForgotPass from '@/views/Authentication/ForgotPass.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: SignIn
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/forgotPass',
      name: 'signUp',
      component: ForgotPass
    }
  ]
})

export default router
