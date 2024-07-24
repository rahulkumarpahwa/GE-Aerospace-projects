import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import TaskOne from '@/components/TaskOne.vue'
// import TaskTwo from '@/components/TaskTwo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      //  I am commenting the two routes here on 24-7-24, i want you to have this thing when we click it must scroll to that component.
      // children: [
      //   {
      //     path: '#one',
      //     component: TaskOne
      //   },
      //   {
      //     path: '#two',
      //     component: TaskTwo
      //   }
      // ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/completion',
      name: 'completion',
      component: () => import('../views/CompletionView.vue')
    }
  ]
})

export default router
