<template>
    <div>
        <modal
            name="contact-support-modal"
            height="auto"
            width="100%"
            :shiftY="1"
        >
            <div class="section">
                <div class="columns is-mobile">
                    <div class="column is-half is-offset-3">
                            <h1 class="title">Have a question?</h1>

                            <form
                                aria-autocomplete="off"
                                @submit.prevent="contactSupport"
                                @keydown="form.clear($event.target.name)"
                            >
                                <div class="field">
                                    <div class="control">
                                        <input 
                                            class="input" 
                                            type="text" 
                                            name="name"
                                            placeholder="What's your name?"
                                            v-model="form.name"
                                            requiredd
                                        >
                                        <span class="help is-danger" 
                                        v-if="form.errors.has('name')" 
                                        v-text="form.errors.get('name')"></span>
                                    </div>
                                </div>
                                
                                <div class="field">
                                    <div class="control">
                                        <input 
                                            class="input" 
                                            type="text" 
                                            name="email"
                                            placeholder="Which email address should we respond to?"
                                            v-model="form.email"
                                            requiredd
                                        >
                                        <span class="help is-danger" 
                                        v-if="form.errors.has('email')" 
                                        v-text="form.errors.get('email')"></span>
                                    </div>
                                </div>
                                
                                <div class="field">
                                    <div class="control">
                                        <textarea 
                                            class="textarea" 
                                            name="message"
                                            placeholder="What's your question?"
                                            v-model="form.message"
                                            requiredd
                                        ></textarea>
                                        <span class="help is-danger" 
                                        v-if="form.errors.has('message')" 
                                        v-text="form.errors.get('message')"></span>
                                    </div>
                                </div>
                                
                                <div class="field">
                                    <div class="control">
                                        <input 
                                            class="input" 
                                            type="text" 
                                            name="verification"
                                            placeholder="What is 4 + 1 ?"
                                            v-model="form.verification"
                                            requiredd
                                        >
                                        <span class="help is-danger" 
                                        v-if="form.errors.has('verification')" 
                                        v-text="form.errors.get('verification')"></span>
                                    </div>
                                </div>

                                <div class="field is-grouped is-grouped-right">
                                    <p class="control">
                                        <button 
                                            class="button is-primary" 
                                            type="submit"
                                            :disabled="form.submitted"
                                        >
                                        Submit
                                        </button>
                                    </p>
                                    <p class="control">
                                        <a 
                                            class="button is-light"
                                            @click="cancel"
                                        >
                                        Cancel
                                        </a>
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
        contactSupport() {
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
            this.$modal.hide('contact-support-modal');
        },

        cancel() {
            this.hideModal();
            this.form.reset();
        }
    }
}
</script>