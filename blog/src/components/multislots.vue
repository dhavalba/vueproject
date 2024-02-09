<template>
    <slot name="firstBlock"></slot>
    <slot name="secondBlock"></slot>
    <slot name="thirdblock"></slot>

    <h2>{{urname}} multislots</h2>
</template>
<script>
import {useRoute} from 'vue-router'
    export default {
        name:"multislots",
        data() {
            return {
                urname : ''
            }
        },
        mounted() {
            const route=useRoute();
            console.warn("Route",route.params.name);
            this.urname = route.params.name;
        }
    }
</script>



1. 