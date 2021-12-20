import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Page list
const Home = require('../components/pages/Home.vue').default
const About = require('../components/pages/About.vue').default
const NotFound = require('../components/pages/NotFound.vue').default

// Route list
const routes = [
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '*',
        component: NotFound,
    },
]

// Vue Router Initialitation
const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router