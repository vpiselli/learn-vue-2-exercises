<template>
    <div><slot></slot></div>
</template>

<script>
import { throttle } from 'lodash';

export default {
    mounted() {
        let el = this.$el;
        let originalOffsetTop = el.offsetTop;

        window.addEventListener(
            'scroll',
            throttle(function() {
                // console.log('scrollY: ' + window.scrollY);
                // if (window.scrollY >= originalOffsetTop) {
                    //     el.classList.add('is-fixed-to-top');
                // } else {
                    //     el.classList.remove('is-fixed-to-top');
                // }
                // equivalent:
                el.classList[
                    window.scrollY >= originalOffsetTop ? 'add' : 'remove'
                ]('is-fixed-to-top');
            }, 250),
            { passive: true }
        );
    }
}
</script>
