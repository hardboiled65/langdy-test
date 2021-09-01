import { createRouter, createWebHistory } from 'vue-router'

import Lesson from '../components/Lesson.vue'
import Timetable from '../components/Timetable.vue'
import SubmitLesson from '../components/SubmitLesson.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Lesson },
    { path: '/timetable', component: Timetable },
    { path: '/submit-lesson', component: SubmitLesson },
  ],
})

export default router
