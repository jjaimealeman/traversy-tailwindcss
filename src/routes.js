import Home from './views/Home.vue'
import About from './views/About.vue'
import Colors from './views/Colors.vue'
import API from './views/API.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
	{
		component: Home,
		name: 'Home',
		path: '/'
	},
	{
		component: About,
		name: 'About',
		path: '/about'
	},
	{
		component: Colors,
		name: 'Colors',
		path: '/colors'
	},
	{
		component: API,
		name: 'API',
		path: '/api'
	},
	{
		component: NotFound,
		name: 'NotFound',
		path: '/:path(.*)'
	},
]
