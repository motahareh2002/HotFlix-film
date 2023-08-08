import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SignIn from '@/views/Authentication/SignIn.vue'
import ForgotPass from '@/views/Authentication/ForgotPass.vue'
import HomeLayout from '@/layout/HomeLayout.vue'
import SignInLayout from '@/layout/SignInLayout.vue'
import SignUp from '@/views/Authentication/SignUp.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
          layout : HomeLayout
      }
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: SignIn,
      meta:{
          layout : SignInLayout
      }
    },
    {
      path : '/signUp',
      name : 'signUp',
      component : SignUp,
      meta:{
          layout : SignInLayout
      }
    },
    {
      path: '/forgotPass',
      name: 'forgot',
      component: ForgotPass,
      meta:{
          layout :SignInLayout
      }
    }
  ]
})

export default router
