import { createRouter, createWebHistory } from 'vue-router'
import Allnews from '../components/AllNews.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Все новости',
      component: Allnews
    },
    {
      path: '/Create',
      name: 'Добавить новость',
      component: () => import('../components/Create.vue')
    }
  ]
})

export default router
