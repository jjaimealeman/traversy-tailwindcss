import Home from './views/Home.vue'
import Pricing from './views/Pricing.vue'
import Colors from './views/Colors.vue'
import API from './views/API.vue'
import NotFound from './views/NotFound.vue'
import Email from './views/Email.vue'
import Product from './views/Product.vue'
import Images from './views/Images.vue'
import Login from './views/Login.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
	{
		component: Home,
		name: 'Home',
		path: '/'
	},
	{
		component: Pricing,
		name: 'Pricing',
		path: '/pricing'
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
		component: Email,
		name: 'Email',
		path: '/Email'
	},
    {
        component: Product,
        name: 'Product',
        path: '/product'
    },
    {
        component: Images,
        name: 'Images',
        path: '/images'
    },
    {
        component: Login,
        name: 'Login',
        path: '/login'
    },
	{
		component: NotFound,
		name: 'NotFound',
		path: '/:path(.*)'
	},
]
