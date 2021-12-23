import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Page list
import Home from '../components/pages/Home.vue'
import About from '../components/pages/About.vue'
import User from '../components/pages/User.vue'
import NotFound from '../components/pages/NotFound.vue'

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
        path: '/user/:name?',
        component: User,
        props: true,
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