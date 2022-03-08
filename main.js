Vue.component('message', {
    props: ['title', 'body'],

    data() {
        return {
            isVisable: true
        }
    },

    template: `
        <div>
            <article class="message" v-show="isVisable">
                <div class="message-header">
                    <p>{{ title }}</p>
                    <button class="delete" aria-label="delete" @click="isVisable = false"></button>
                </div>
                <div class="message-body">
                    {{ body }}
                </div>
            </article>
        </div>
    `,

    methods: {
        // hideModal() {
        //     this.isVisable = false
        // }
    }
});

new Vue({
    el: '#root'
});