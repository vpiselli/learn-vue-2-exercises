<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Home Page</div>
                </div>

                <div class="panel-body content" style="margin-top:1000px;">
                    <p class="subtitle">Other example components:</p>
                    <ol>
                        <li><render-example></render-example></li>
                        <li class="mt-4">
                            <div class="columns">
                                <div class="column">
                                    <count :to="11"></count>
                                </div>
                                <div class="column">
                                    <count :to="5"></count>
                                </div>
                                <div class="column">
                                    <count :to="1955"></count>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RenderExample from '../components/RenderExample';
import Counter from '../components/Counter';
import Vue from 'vue';

Vue.component('render-example', RenderExample);
Vue.component('count', Counter);

export default {
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
