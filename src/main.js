import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'

const app = createApp(App)
const head = createHead()

const router = createRouter({
	history: createWebHistory(),
	routes,
})

app.use(head)
app.use(router)
app.mount('#app')
