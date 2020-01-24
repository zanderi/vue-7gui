import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/increment',
		name: 'increment',
		component: () => import ( '../views/increment')
	},
	{
		path: '/temperature',
		name: 'temperature',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/temperature.vue')
	},
	{
		path: '/crud',
		name: 'crud',
		component: () => import ('../views/crud')
	}
]

const router = new VueRouter({
	routes
})

export default router
