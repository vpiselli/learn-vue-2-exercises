import Vue from 'vue';
import VueRouter from 'vue-router';
import PortalVue from 'portal-vue';
import router from './routes';
import VModal from 'vue-js-modal'
import Form from './utilities/Form';
import SeriesDropdown from './components/SeriesDropdown.vue';
import SupportButton from './components/SupportButton.vue';
import SupportForm from './components/SupportForm.vue';
import Pinned from './components/Pinned.vue';
import Swal from 'sweetalert2';

window._ = require('lodash');

window.Vue = Vue;
window.Form = Form;
window.SeriesDropdown = SeriesDropdown;
window.SupportButton = SupportButton;
window.SupportForm = SupportForm;
window.Pinned = Pinned;
window.router = router;
window.axios = require('axios');
window.swal = Swal;

Vue.use(VueRouter)
Vue.use(PortalVue)
Vue.use(VModal)

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';