import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs/bills'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'bills'
      },
      {
        path: 'bills',
        component: () => import('@/views/Bills.vue')
      },
      {
        path: 'clasifiers',
        component: () => import('@/views/Clasifiers.vue'),
        children: [
          {
            path: 'units',
            component: () => import('@/views/Units.vue'),
          },
          {
            path: 'unittypes',
            component: () => import('@/views/UnitTypes.vue'),
          }
        ]
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
