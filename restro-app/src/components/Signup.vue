<template>
<div class="signup-template">
    <h2 class="signup-title">SIGNUP</h2>
    <img alt="Vue logo" class="restro-logo" src="../assets/Images/r-logo.png">
    <div class="form-data signup-form">
        <input type="text" name="Name" v-model="Name" class="form-control" placeholder="Enter your Name">
        <input type="text" name="Email" v-model="Email" class="form-control" placeholder="Enter your Email">
        <input type="text" name="Password" v-model="Password" class="form-control" placeholder="Enter your Password">
        <button class="submit-btn" v-on:click="signup">Signup</button>
        <p class="Page_anchor"><router-link to="/Login">Click here to login</router-link></p>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Signup",
    data() {
       return {
        Name: '',
        Email: '',
        Password: ''
       }

    },
    methods: {
        async signup() {
            let result = await axios.post("http://localhost:3000/users",{
                Name: this.Name,
                Email: this.Email,
                Password: this.Password
            });
            console.log(result);
            if(result.status == 201) {
                localStorage.setItem("user-data",JSON.stringify (result.data));
                this.$router.push({name: 'home'})
            }
           
        }
    },
    mounted() {
        let user = localStorage.getItem("user-data")
        if(user) {
            this.$router.push({name: 'home'})
        }
    }
}
</script>


