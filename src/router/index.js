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
import Detail from '../views/detail/index'
import Login from '../views/login'
import Set from '../views/set'
import Order from '../views/order'
import Data1 from '../views/data1/index'

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
    path: '/login',
    component: Login,
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
    path: '/set',
    component: Set,
    meta: {
      showfooter: false
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      showfooter: false
    }
  },
  {
    path: '/data',
    component: Data,
    meta: {
      showfooter: false
    }
  },
  {
    path: '/detail',
    component: Detail,
    meta: {
      showfooter: false
    }
  },
  {
    path: '/data1',
    component: Data1,
    meta: {
      showfooter: false
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
