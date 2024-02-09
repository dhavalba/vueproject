<template>
<h2>Fecthing API</h2>
<ul class="list-item" v-for="item in list" :key="item">
    <li>{{ item.id }}--{{ item.email }}--{{ item.first_name }}</li>

</ul>
</template>

<script>
import axios from 'axios';
export default {
    name: "APIfetch",
    data() {
        return {
            list: []
        }
    },

    async mounted() {
        const result = await axios.get("https://reqres.in/api/users?page=1");
        console.log(result.data.data);
        this.list = result.data.data;
    }

}
</script>

<style>
.list-item {
    border: 1px solid #2c1a1a;
    padding: 10px;
}

.list-item li {
    list-style: none;
    text-align: left;
}
</style>
