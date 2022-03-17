<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Faq Page</div>
                </div>

                <div class="panel-body">
                    <accordion :items="questions"></accordion>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Accordion from '../components/Accordion.vue';

export default {

    data() {
        return {
            questions: [
                {
                    title: "This is my question 1?",
                    body: "And this is my answer 1"
                },
                {
                    title: "This is my question 2?",
                    body: "And this is my answer 2"
                },
                {
                    title: "This is my question 3?",
                    body: "And this is my answer 3"
                },
            ]
        };
    },
    
    components: { Accordion },

    mounted() {
        // Axios request here
        console.log('Component mounted.')
    }
}
</script>
