require('./bootstrap');
import { throttle } from 'lodash';

const app = new Vue({
    el: '#app',

    components: { SeriesDropdown, SupportButton, SupportForm },

    router,

    mounted() {
        let bar = this.$refs['banner-meta'];
        let originalOffsetTop = bar.offsetTop;
        
        window.addEventListener(
            'scroll', 
            throttle(function() {
                console.log('I was called');
                if (window.scrollY >= originalOffsetTop) {
                    bar.classList.add('is-fixed-to-top');
                } else {
                    bar.classList.remove('is-fixed-to-top');
                }
            }, 300)
        );
    }

});