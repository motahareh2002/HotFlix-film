import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SignIn from '@/views/Authentication/SignIn.vue'
import ForgotPass from '@/views/Authentication/ForgotPass.vue'
import HomeLayout from '@/layout/HomeLayout.vue'
import SignInLayout from '@/layout/SignInLayout.vue'
import SignUp from '@/views/Authentication/SignUp.vue'
import CatalogView from '@/views/CatalogView.vue'
import PricingPlanViewVue from '@/views/PricingPlanView.vue'
import NotFoundViewVue from '@/views/NotFoundView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactsView from '@/views/ContactsView.vue'
import HelpCenterView from '@/views/HelpCenterView.vue'
import PrivacyPolicyViewVue from '@/views/PrivacyPolicyView.vue'
import ProfileView from '@/views/ProfileView.vue'
import CartonsITem from '@/components/newItems/CartonsITem.vue'
import MoviesItem from '@/components/newItems/MoviesItem.vue'
import NewReleases from '@/components/newItems/NewReleases.vue'
import TvSeries from '@/components/newItems/TvSeries.vue'
import ProfileMain from '@/components/profile/ProfileMain.vue'
import PricePlace from '@/components/bestPlace/PricePlace.vue'
import ProfileSetting from '@/components/profile/ProfileSetting.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
          layout : HomeLayout
      },
      children:[
        {path : 'carton' , name : 'Carton', component : CartonsITem},
        {path : 'movie' , name : 'movie', component : MoviesItem},
        {path : 'newRelease' , name : 'newRelease', component : NewReleases},
        {path : 'tvSeries' , name : 'tvSeries', component : TvSeries},
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundViewVue,
      meta:{
          layout :SignInLayout
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
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogView,
      meta:{
          layout :HomeLayout
      }
    },
    {
      path: '/pricingPlan',
      name: 'pricingPlan',
      component: PricingPlanViewVue,
      meta:{
          layout :HomeLayout
      }
    },
    
    {
      path: '/about',
      name: 'About',
      component: AboutView,
      meta:{
          layout :HomeLayout
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactsView,
      meta:{
          layout :HomeLayout
      }
    },
    {
      path: '/helpCenter',
      name: 'HelpCenter',
      component: HelpCenterView,
      meta:{
          layout :HomeLayout
      }
    },
    {
      path: '/privacy',
      name: 'PrivacyPolicy',
      component: PrivacyPolicyViewVue,
      meta:{
          layout :HomeLayout
      }
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: ProfileView,
      meta:{
          layout :HomeLayout
      },
      children:[
        {path : 'profileTo' , name : 'profileTo', component : ProfileMain},
        {path : 'subscription' , name : 'subscription', component : PricePlace},
        {path : 'setting' , name : 'setting', component : ProfileSetting},
      ]
    },
  ]
})

export default router

