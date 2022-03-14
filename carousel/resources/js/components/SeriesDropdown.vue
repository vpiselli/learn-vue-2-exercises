<template>
        <a 
            class="navbar-item" 
            @mouseover="active = true" 
            @mouseout="active = false"
        >
            Series

            <portal to="nav-after">
                <div v-show="active" 
                    @mouseover="active = true" 
                    @mouseout="active = false"
                    style="position: absolute; width: 100%; z-index:10; height: 350px; background-color: white; left: 0;"
                >
                    <div class="container" style="padding:40px;">Hello</div>
                </div>
            </portal>
        </a>
</template>

<script>
export default {
    data() {
        return {
            active: false
        }
    }
}
</script>