<template>
<headercomp />
<h1 class="heading-title">Hello <span class="name-span">{{ Name }} </span>! Welcome to Home component</h1>
<!-- <table>
    <tr v-for="item in result" :key="item.name">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.contact }}</td>
    </tr>
 </table>
 <div v-for="item in result" :key="item.name">
    <p>{{ item.name }}</p>

 </div> -->

<!-- <ul v-for="item in restorants" :key="item.id">
    <li >{{ item.id }}</li>
    <li >{{ item.name }}</li>
    <li >{{ item.address }}</li>
    <li >{{ item.contact }}</li>
 </ul> -->

<table class="restro-table">
    <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Contact</td>
        <td>Address</td>
        <td>Action</td>
    </tr>
    <tr v-for="item in restorants" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.contact }}</td>
        <td>{{ item.address }}</td>
        <td>
            <router-link :to="'/Update-Restro/'+item.id" class="update">Update</router-link> <button v-on:click="DeleteData(item.id)" class="Delete">Delete</button>
        </td>

    </tr>
</table>
</template>

<script>
import axios from 'axios';
import headercomp from './headercomp.vue'
export default {
    name: "home",
    components: {
        headercomp
    },
    data() {
        return {
            Name: '',
            restorants: []
        }
    },

    methods: {
        async DeleteData(id) {
            console.warn(id);
            let DeleteData = await axios.delete("http://localhost:3000/restorants/" + id);
            console.warn(DeleteData);
            if (DeleteData.status == 200) {
                this.LoadData();
            }
        },
        async LoadData() {
            let user = localStorage.getItem("user-data");
            this.Name = JSON.parse(user).Name;
            if (!user) {
                this.$router.push({
                    name: 'Signup'
                })
            }
            // restorent part display section
            let result = await axios.get("http://localhost:3000/restorants");
            // console.warn(result);
            this.restorants = result.data;
        }

    },

    mounted() {
        this.LoadData();

    }
}
</script>

<style>
.restro-table {
    border: 1px solid #6d6d6d;
    margin: 30px auto;
}

td {
    border: 1px solid;
    padding: 10px 15px;
}

.Delete {
    padding: 5px 10px;
    font-size: 12px;
    background-color: #380500;
    color: #fff;
    border: 0;
    margin-left: 5px;
    border-radius: 5px;
}

.update {
    padding: 5px 10px;
    font-size: 12px;
    background-color: #df710a;
    color: #fff;
    border: 0;
    border-radius: 5px;
}

.update:hover {
    color: #fff;
}
.name-span {
    color: #df710a;
}
.heading-title {
    font-size: 20px;
    margin-top: 20px;
}
.signup-template, .login-template {
    margin-top: 20px;
}
</style>
