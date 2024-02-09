<template>
    <h1>Watcher component</h1>
    <h2>{{ count }}</h2>
    <button v-on:click="inc">+</button>
    <button v-on:click="dec">-</button>
</template>
<script>
    export default {
        name: "watcher",
        data() {
            return {
                count: 0,
                stop: []
            }
        },
        methods: {

           inc(val) {
            
                this.count=this.count+1;
               
                
           },
           dec() {
            this.count=this.count-1;
            if(this.count<0) {
                this.count=0
            }
           }
        },
        watch: {
            count(val){
                if(val>5) {
                    alert("stop counting");
                }
            }
        }
    }
</script>