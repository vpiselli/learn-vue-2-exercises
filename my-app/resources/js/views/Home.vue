<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Home Page</div>
                </div>

                <div class="panel-body content">
                    Other example components:
                    <ul>
                        <render-example></render-example>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RenderExample from '../components/RenderExample';
import Vue from 'vue';

Vue.component('render-example', RenderExample);

export default {
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
