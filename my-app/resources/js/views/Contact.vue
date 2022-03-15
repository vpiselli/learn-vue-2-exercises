<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Contact Page</div>
                </div>

                <div class="panel-body">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Sint accusamus vel assumenda non libero eligendi maiores 
                        ducimus eius unde quisquam? Adipisci laboriosam laudantium 
                        atque voluptas consectetur rerum, sit fugiat laborum.
                    </p>
                    <p class="mt-4">
                        <support-button></support-button>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SupportButton from '../components/SupportButton.vue';
export default {
    components: { SupportButton },
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
