import './bootstrap';
import router from './routes'
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const app = new Vue({
    el: '#app', 

    router
});