Vue.component('modal', {
    template: `
        <div class="modal is-active is-clipped">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">
                        <slot name="header"></slot>
                    </p>
                    <button class="delete" aria-label="close" @click="$emit('close')"></button>
                </header>
                <section class="modal-card-body">
                    <slot>Default content</slot>
                </section>
                <footer class="modal-card-foot">
                    <slot name="footer">
                        <!-- Default button -->
                        <button class="button is-success">Ok</button>
                    </slot>
                </footer>
            </div>
        </div>
    `
});

new Vue({
    el: '#root', 
    
    data: {
        isActive: false
    }

});