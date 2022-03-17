<template>
    <div v-show="false">
        <slot></slot>
    </div>
</template>

<script>
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

export default {
    props: {
        name: {},
        placement: { default: 'top' },
        offset: { default: false }
    },

    mounted() {
        document
            .querySelectorAll(`[data-tooltip-name=${this.name}]`)
            .forEach(elem => {
                tippy(elem, {
                    placement: this.placement,
                    content: this.$el.innerHTML,
                    offset: this.offset,
                    allowHTML: true
                });
            });
    }
}
</script>