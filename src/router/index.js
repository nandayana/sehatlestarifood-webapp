import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ProductPage from '../pages/ProductPage.vue'
import TentangPage from '../pages/TentangPage.vue'
import productDetail from '../pages/DetailProductPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/product', name: 'Product', component: ProductPage },
  { path: '/about', name: 'About', component: TentangPage },
  { path: '/product/:slug', name: 'Detail-Product', component: productDetail }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})
