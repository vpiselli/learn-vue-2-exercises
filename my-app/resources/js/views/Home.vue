<template>
    <div class="container" style="height:1000px;">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Home Page</div>
                </div>

                <div class="panel-body content">
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

                        <li class="mt-4">
                            <button id="js-forum-reply-button" class="button is-info" @click="$modal.show('repy-conversation-modal')">Reply button</button>
                        </li>
                    </ol>
                </div>
            </div>
        </div>

        <conditional-element when-hidden="#js-forum-reply-button">
                <button
                    class="button is-info is-rounded"
                    style="position:fixed; bottom:50px; right:50px;"
                    @click="$modal.show('repy-conversation-modal')"
                >+</button>
        </conditional-element>

        <reply-form></reply-form>

    </div>
</template>

<script>
import RenderExample from '../components/RenderExample';
import Counter from '../components/Counter';
import ReplyForm from '../components/ReplyForm';
import ConditionalElement from '../components/ConditionalElement';
import Vue from 'vue';

Vue.component('render-example', RenderExample);
Vue.component('count', Counter);
Vue.component('reply-form', ReplyForm);
Vue.component('conditional-element', ConditionalElement);

export default {
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
