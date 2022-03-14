import './bootstrap';
import Vue from 'vue';
import PortalVue from 'portal-vue'

Vue.use(PortalVue)

const app = new Vue({
    el: '#app',

    components: {
        'series-dropdown': require('./components/SeriesDropdown.vue').default
    }

});