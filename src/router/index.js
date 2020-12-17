import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index'
import classify from '../views/classify/index'
import Inquiry from '../views/inquiry/index'
import Car from '../views/car/index'
import Main from '../views/main/index'
import Search from '../views/home/search/index'
import News from '../views/news/index'
import Data from '../views/home/search/data/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      showfooter: true
    }
  },
  {
    path: '/news',
    component: News,
    meta: {
      showfooter: false
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      showfooter: false
    }
  },
  {
    path: '/classify',
    component: classify,
    meta: {
      showfooter: true
    }
  },
  {
    path: '/inquiry',
    component: Inquiry,
    meta: {
      showfooter: true
    }
  },
  {
    path: '/car',
    component: Car,
    meta: {
      showfooter: true
    }
  },
  {
    path: '/main',
    component: Main,
    meta: {
      showfooter: true
    }
  },
  {
    path: '/data',
    component: Data,
    meta: {
      showfooter: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
