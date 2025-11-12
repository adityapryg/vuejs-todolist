import LoginView from '@/views/LoginView.vue'
import TasksView from '@/views/TasksView.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: TasksView },
  { path: '/login', component: LoginView },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
