import { createRouter, createWebHistory } from 'vue-router'

import Lesson from '../components/Lesson.vue'
import Timetable from '../components/Timetable.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Lesson },
    { path: '/timetable', component: Timetable },
  ],
})

export default router
