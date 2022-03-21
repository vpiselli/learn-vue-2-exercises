<template>
    <div>
        <modal
            name="repy-conversation-modal"
            height="auto"
            width="80%"
            :shiftY="1"
        >
            <div class="section">
                <div class="columns is-mobile">
                    <div class="column is-half is-offset-3">
                            <h1 class="subtitle">Reply to <span class="has-text-info">CONVERSATION</span></h1>

                            <form
                                aria-autocomplete="off"
                                @submit.prevent="replyConversation"
                                @keydown="form.clear($event.target.name)"
                            >
                                <div class="field">
                                    <div class="control">
                                        <textarea
                                            class="textarea"
                                            name="message"
                                            placeholder="But here's the thing..."
                                            v-model="form.message"
                                            requiredd
                                        ></textarea>
                                        <span class="help is-danger"
                                        v-if="form.errors.has('message')"
                                        v-text="form.errors.get('message')"></span>
                                    </div>
                                </div>

                                <div class="field is-grouped is-grouped-right">
                                    <p class="control">
                                        <a
                                            class="button is-light"
                                            @click="cancel"
                                        >
                                        Cancel
                                        </a>
                                    </p>
                                    <p class="control">
                                        <button
                                            class="button is-info"
                                            type="submit"
                                            :disabled="form.submitted"
                                        >
                                        Post
                                        </button>
                                    </p>
                                </div>

                            </form>
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: new Form({
                name: '',
                email: '',
                message: '',
                verification: ''
            })
        };
    },

    methods: {
        replyConversation() {
			this.form.submit('post', '/messages')
				.then(response => {
                    this.hideModal();
                    console.log(response);
                    swal.fire({
                        icon: 'success',
                        title: 'Thanks!',
                        text: 'We will be in touch soon.'
                    });
                })
				.catch(errors => console.log(errors));
		},

        hideModal() {
            this.$modal.hide('repy-conversation-modal');
        },

        cancel() {
            this.hideModal();
            this.form.reset();
        }
    }
}
</script>