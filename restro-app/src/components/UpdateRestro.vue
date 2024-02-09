<template>
<headercomp />
<div class="signup-template add-restro mt-3">
    <h2 class="signup-title">Update Resto</h2>
    <img alt="Vue logo" class="restro-logo" src="../assets/Images/r-logo.png">
    <div class="form-data signup-form">
        <input type="text" name="name" v-model="restaurant.name" class="form-control" placeholder="Enter your Name">
        <input type="text" name="address" v-model="restaurant.address" class="form-control" placeholder="Enter your Address">
        <input type="text" name="contact" v-model="restaurant.contact" class="form-control" placeholder="Enter your Contact">
        <button type="button" class="submit-btn" v-on:click="UpdateRestro">Update Restro</button>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import Headercomp from './headercomp.vue';
export default {
    name: "UpdateRestro",
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
       async UpdateRestro() {
            console.warn(this.restaurant);
            const UpdatedData = await axios.put("http://localhost:3000/restorants/"+this.$route.params.id, {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact,
            });
            if (UpdatedData.status == 200) {
                this.$router.push({
                    name: 'home'
                })
            }
            console.warn("Updated Data", UpdatedData);
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-data');
        if (!user) {
            this.$router.push({
                name: 'signup'
            })
        }
        const result = await axios.get("http://localhost:3000/restorants/"+this.$route.params.id);
        // console.warn(result.data);
        this.restaurant = result.data;
    }
}
</script>
