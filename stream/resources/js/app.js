import './bootstrap';
import router from './routes'
import Vue from 'vue';
import VueRouter from 'vue-router';
import Form from './utilities/Form'

window.Form = Form;

Vue.use(VueRouter);

const app = new Vue({
    el: '#app', 

    router
});