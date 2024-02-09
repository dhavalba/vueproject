<template>
    <h1>Send form data</h1>

    <input type="text" placeholder="Enter Email" name="email" v-model="email"><br>
    <input type="text" placeholder="Password" name="password" v-model="password"><br>
    <button v-on:click="Adduser()">Add user</button>

    

</template>
<script>
import axios from 'axios'
    export default {
        name: "SendFormData",
        data() {
            return {
               
                email: '',
                password: '',
            }
        },
        methods: {
           async Adduser() {
                
               const result = await axios.post("http://localhost:3000/user",{
                    email: this.email,
                    password: this.password
                });
                console.log(result.data);
            }
           
        }
    }
   

</script>
