<style>
    /* #tooltip {
        background-color: #333;
        color: white;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 13px;
    } */
</style>

<template>
    <div class="container tooltip">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 block">
                <div class="panel panel-default">
                    <div class="panel-heading">Tooltip: First example</div>
                </div>

                <div class="panel-body">
                    <p class="block">
                        Hello there, <span data-tooltip="I am a tooltip default">hover over me - default</span>.
                    </p>
                    <p class="block">
                        Hello there, <span data-tooltip="I am a tooltip left" data-tooltip-placement="left">hover over me - left</span>.
                    </p>
                    <p class="block">
                        Hello there, <span data-tooltip="I am a tooltip right" data-tooltip-placement="right">hover over me - right</span>.
                    </p>
                    <p class="block">
                        Hello there, <span data-tooltip="I am a tooltip top" data-tooltip-placement="top">hover over me - top</span>.
                    </p>
                    <p class="block">
                        Hello there, <span data-tooltip="I am a tooltip bottom" data-tooltip-placement="bottom">hover over me - bottom</span>.
                    </p>

                    <hr>
                </div>
            </div>

            <div class="col-md-8 col-md-offset-2 block">
                <div class="panel panel-default">
                    <div class="panel-heading">Tooltip: Second example</div>
                </div>

                <div class="panel-body">
                    <p class="block">
                        Hello there, <span v-tooltip="'I am a tooltip default'">hover over me - default</span>.
                    </p>
                    <p class="block">
                        Hello there, <span v-tooltip:left="'I am a tooltip left'">hover over me - left</span>.
                    </p>
                    <p class="block">
                        Hello there, <span v-tooltip:right="'I am a tooltip right'">hover over me - right</span>.
                    </p>
                    <p class="block">
                        Hello there, <span v-tooltip:top="'I am a tooltip top'">hover over me - top</span>.
                    </p>
                    <p class="block">
                        Hello there, <span v-tooltip:bottom="'I am a tooltip bottom'">hover over me - bottom</span>.
                    </p>

                    <hr>
                </div>
            </div>

            <div class="col-md-8 col-md-offset-2 block">
                <div class="panel panel-default">
                    <div class="panel-heading">Tooltip: Third example</div>
                </div>

                <div class="panel-body">
                    <p class="block">
                        Hello there, <span data-tooltip-name="our-products-tooltip">learn about our products</span>.
                    </p>

                    <tooltip name="our-products-tooltip" placement="top" offset="10,20">
                        <div class='block'>
                            <h1 class="title has-text-white">Our products</h1>
                            <p class="subtitle has-text-white">Lorem ipsum dolor site amet.</p>
                        </div>
                    </tooltip>

                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import Tooltip from '../components/Tooltip.vue'
import Vue from 'vue';

Vue.directive('tooltip', {
    bind(elem, bindings) {
        tippy(elem, {
            placement: bindings.arg,
            content: bindings.value
        });
    }
});

Vue.component('tooltip', Tooltip);

export default {
    mounted() {
        document.querySelectorAll('[data-tooltip]').forEach(elem => {
            tippy(elem, {
                placement: elem.dataset.tooltipPlacement || 'top',
                content: elem.dataset.tooltip
            });
        });
    }
    }
</script>
