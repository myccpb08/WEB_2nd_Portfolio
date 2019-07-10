import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import PostPage from './views/PostPage.vue'
import PortfolioPage from './views/PortfolioPage.vue'
import LoginPage from './views/LoginPage.vue'
import Portfoliowirter from './views/Portfoliowirter.vue'
import SignUpPage from './views/SignUpPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
		{
			path: '/',
			name: 'home',
			component: HomePage
		},
		{
			path: '/post',
			name: 'post',
			component: PostPage
		},
		{
			path: '/portfolio',
			name: 'portfolio',
			component: PortfolioPage
		},
		{
			path: '/portfoliowirter',
			name: 'portfoliowirter',
			component: Portfoliowirter
		},
		{
			path: '/SignUpPage',
			name: 'SignUpPage',
			component: SignUpPage
		}
  ]
})
