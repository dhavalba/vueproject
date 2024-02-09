<template>
    
    <h1>User component</h1>
    <button v-on:click="GetUser(userName)">Click me</button>
</template>
<script>
    export default {
        name: "user",
        data() {
            return {
                userName: "Dhaval bavariya"
            }
        },
        props: {
            GetUser: Function
        }
    }
</script>