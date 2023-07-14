import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SuperAdminLgaView from '../components/SuperAdminLgaView'
// import SuperAdminWardView from '../components/SuperAdminWardView'
import SuperAdminPollingUnitView from '../components/SuperAdminPollingUnitView'
import SuperAdminPollingUnitDetailView from '../components/SuperAdminPollingUnitDetailView'
import LgaLanding from '../components/LgaAdmin/LgaAdminLanding.vue'
import PollingLanding from '../components/PollingUnit/PollingUnitLanding.vue'
import FeedBack from '../components/FeedBack/FeedBackLanding.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta : {
      requiresLogin : true
    }
  },

  {
    path: '/lga-view',
    name: 'SuperAdminLgaView',
    component: SuperAdminLgaView,
    meta : {
      requiresLogin : true
    }
  },

  {
    path: '/polling-unit-view',
    name: 'SuperAdminPollingUnitView',
    component: SuperAdminPollingUnitView,
    meta : {
      requiresLogin : true
    }
  },

  {
    path: '/polling-unit-detail-view/:pollingUnit',
    name: 'SuperAdminPollingUnitDetailView',
    component: SuperAdminPollingUnitDetailView,
    meta : {
      requiresLogin : true
    }
  },

  // {
  //   path: '/ward-view',
  //   name: 'SuperAdminWardView',
  //   component: SuperAdminWardView,
  //   meta : {
  //     requiresLogin : true
  //   }
  // },
  
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta : {
      cannotBeAccessedAfterLogin : true
    }
  },
  {
    path: '/super/user/lga-admin',
    name: 'LgaLanding',
    component: LgaLanding
  },
  {
    path: '/super/user/polling',
    name: 'PollingLanding',
    component: PollingLanding
  },
  {
    path: '/super/feedback',
    name: 'FeedBack',
    component: FeedBack
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
