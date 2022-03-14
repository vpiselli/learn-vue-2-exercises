<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Home Page</div>
                </div>

                <div class="panel-body">
                    <p class="mt-4">Loading default slot:</p>
                    <menu-list :items="[ 'one', 'two', 'three' ]"></menu-list>
                    
                    <p class="mt-4">Custom values for default slot:</p>
                    <menu-list :items="[ 'one', 'two', 'three' ]">
                        <template scope="props">
                            <em v-text="props.item"></em>
                        </template>
                    </menu-list>
                    
                    <p class="mt-4">Custom values for custom slot name:</p>
                    <menu-list :items="[ 'one', 'two', 'three' ]">
                        <template slot="menu-item" scope="props">
                            <em v-text="props.item"></em>
                        </template>
                    </menu-list>
                    I'm an example component!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        components: {
            'menu-list': require('./MenuList.vue').default
        },

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
