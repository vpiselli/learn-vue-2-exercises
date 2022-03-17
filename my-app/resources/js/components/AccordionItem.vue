<template>
    <div class="card">
        <header class="card-header" @click="toggle">
            <p class="card-header-title" v-text="item.title"></p>
            <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true" v-if="isOpen"></i>
                    <i class="fas fa-angle-right" aria-hidden="true" v-else></i>
                </span>
            </button>
        </header>
        <div class="card-content">
            <div class="content" v-text="item.body" v-show="isOpen"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['item', 'isOpen'],

    methods: {
        toggle() {
            this.$emit('toggled', this.$vnode.key);
        }
    }
}
</script>