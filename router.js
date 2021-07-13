import { createWebHistory, createRouter } from 'vue-router'
import strings from '@/components/strings.vue'
import lists from '@/components/lists.vue'
import dicts from '@/components/dicts.vue'
import conditions from '@/components/conditions.vue'
import main from '@/components/main.vue'
import NotFound from '@/components/NotFound.vue'

const history = createWebHistory('/Python-Cards/')
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/lists',
      name: 'lists',
      component: lists
    },
    {
      path: '/strings',
      name: 'strings',
      component: strings
    },
    {
      path: '/dicts',
      name: 'dicts',
      component: dicts
    },
    {
      path: '/conditions',
      name: 'conditions',
      component: conditions
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    }
  ]
})

export default router
