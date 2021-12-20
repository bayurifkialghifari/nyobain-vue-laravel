require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('header-component', require('./components/layouts/Header.vue').default);
Vue.component('footer-component', require('./components/layouts/Footer.vue').default);

const app = new Vue({
    el: '#app',
});
