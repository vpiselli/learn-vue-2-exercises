<template>
    <div class="box has-background-primary-light has-text-primary" v-text="count"></div>
</template>

<script>
import inView from 'in-viewport';

export default {
    props: {
        to: { default: 0 },
        speed: { default: 40 }
    },

    data() {
        return {
            count: 0,
            interval: null
        }
    },

    computed: {
        increment() {
            return Math.ceil(this.to / this.speed);
        }
    },

    mounted() {
        inView(this.$el, () => {
            this.interval = setInterval(this.tick, this.speed);
        });
    },

    methods: {
        tick() {
            if (this.count + this.increment > this.to) {
                this.count = this.to;
                return clearInterval(this.interval);
            }

            return (this.count += this.increment);
        }
    }
}
</script>

<style>

</style>