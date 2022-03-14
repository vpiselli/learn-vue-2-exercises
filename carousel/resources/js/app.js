import './bootstrap';
import Vue from 'vue';

const app = new Vue({
    el: '#app',

    components: {
        'carousel': require('./components/Carousel.vue').default
    }

});