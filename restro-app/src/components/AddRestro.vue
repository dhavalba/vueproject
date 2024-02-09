<template>
<headercomp />
<div class="signup-template add-restro mt-3">
    <h2 class="signup-title">Add Resto</h2>
    <img alt="Vue logo" class="restro-logo" src="../assets/Images/r-logo.png">
    <div class="form-data signup-form">
        <input type="text" name="name" v-model="restaurant.name" class="form-control" placeholder="Enter your Name">
        <input type="text" name="address" v-model="restaurant.address" class="form-control" placeholder="Enter your Address">
        <input type="text" name="contact" v-model="restaurant.contact" class="form-control" placeholder="Enter your Contact">
        <button type="button" class="submit-btn" v-on:click="AddRestro">Add New Restro</button>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import Headercomp from './headercomp.vue';

export default {
    name: "AddRestro",
    components: {
        Headercomp
    },
    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: '',

            }
        }
    },
    methods: {
        async AddRestro() {
            console.warn(this.restaurant);
            const result = await axios.post("http://localhost:3000/restorants", {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact,
            });
            if (result.status == 201) {
                this.$router.push({
                    name: 'home'
                })
            }
            console.warn("result", result)
        }
    },
    mounted() {
        let user = localStorage.getItem('user-data');
        if (!user) {
            this.$router.push({
                name: 'signup'
            })
        }
    }
}
</script>
