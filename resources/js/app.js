require('./bootstrap')

import Vue from 'vue'
import router from './router'

Vue.component('header-component', require('./components/layouts/Header.vue').default)
Vue.component('footer-component', require('./components/layouts/Footer.vue').default)

// App Initialitation
const app = new Vue({
    el: '#app',
    data: {
        title: 'Vue Laravel'
    },
    router
})
