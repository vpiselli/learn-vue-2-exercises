import Vue from 'vue';
import axios from 'axios';
import Form from './core/Form';

window.Vue = require('vue');

// import Example from './components/Example';

new Vue({
	el: '#app',

	components: {
		
	},
	
	data: {
		form: new Form({
			name: '',
			description: ''
		})
	},
	
	methods: {
		onSubmit() {
			this.form.submit('post', '/projects')
				.then(data => console.log(data))
				.catch(errors => console.log(errors));
		},
		
	}
});