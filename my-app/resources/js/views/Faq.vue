<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Faq Page</div>
                </div>

                <div class="panel-body">
                    <accordion :title="question.question" :body="question.answer"></accordion>
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
            question: {
                question: "This is my question?",
                answer: "And this is my answer"
            }
        };
    },
    
    components: { Accordion },

    mounted() {
        // Axios request here
        console.log('Component mounted.')
    }
}
</script>
