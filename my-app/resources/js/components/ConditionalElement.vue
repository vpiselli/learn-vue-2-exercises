<template>
    <transition name="fade">
        <div v-show="isVisible">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
import inView from 'in-viewport';

export default {
    props: [ 'whenHidden' ],

    data() {
        return {
            isVisible: false
        }
    },

    mounted() {
        window.addEventListener('scroll', this.checkDisplay, { passive: true });
    },

    methods: {
        checkDisplay() {
            this.isVisible = ! inView(
                document.querySelector(this.whenHidden)
            );
        }
    }
};
</script>

<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .3s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>