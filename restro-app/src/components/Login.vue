<template>
<div class="signup-template login-template">
    <h2 class="signup-title">Login</h2>
    <img alt="Vue logo" class="restro-logo" src="../assets/Images/r-logo.png">
    <div class="form-data signup-form login-form">
        <input type="text" name="Email" v-model="Email" class="form-control" placeholder="Enter your Email">
        <input type="text" name="Password" v-model="Password" class="form-control" placeholder="Enter your Password">
        <button class="submit-btn" v-on:click="login">Login</button>
        <p class="Page_anchor">
            <router-link to="/Signup">Click here to signup</router-link>
        </p>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: "login",
    data() {
        return {
            Email: '',
            Password: ''
        }
    },
    methods: {
        async login() {
            let result = await axios.get(`http://localhost:3000/users?Email=${this.Email}&Password=${this.Password}`);
            console.warn(result);
            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("user-data",JSON.stringify(result.data[0]));
                this.$router.push({
                    name: 'home'
                })
            }
            else {
            alert("No Rescord found");
            this.Email = "",
            this.Password = ""
            
            }
        }

        //http://localhost:3000/users?email=dhavalbavariya@test.com&password=Dhaval@123
    },
    mounted() {
        let user = localStorage.getItem("user-data")
        if (user) {
            this.$router.push({
                name: 'home'
            })
        } 
    }
}
</script>
