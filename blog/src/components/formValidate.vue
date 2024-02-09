<template>
<h2>FormValidate component</h2>
<ul>
    <li v-for="item in error" v-bind:key="item" >
        Error in {{ item }}
    </li>
</ul>
<form>
    <label>Name</label>
    <input type="text" v-model="form.Name"><br>
    <label>Password</label>
    <input type="password" v-model="form.Password"><br>
    <label>Country</label>
    <select v-model="form.Country">
        <option>India</option>
        <option>USA</option>
        <option>Newzeland</option>
        <option>Aus</option>
    </select><br>
    <label>Java</label>
    <input type="checkbox" value="Java" v-model="form.technology">
    <label>Vue</label>
    <input type="checkbox" value="Vue" v-model="form.technology"><br>
    <label>React</label>
    <input type="checkbox" value="React" v-model="form.technology"><br>

    <label>Male</label>
    <input type="radio" value="Male" v-model="form.gender">
    <label>Female</label>
    <input type="radio" value="Female" v-model="form.gender">
    <button v-on:click="login">Send Data</button>
</form>
</template>

<script>
export default {
    name: "formValidate",
    data() {
        return {
            form: {
                Name: '',
                Password: '',
                Country: '',
                technology: [],
                gender: ''

            },
            error: [],
        }
    },
    methods: {
        login() {
            this.error = [];
            for (const item in this.form) {
                if (this.form[item] === "" || this.form[item].length === 0) {
                    this.error.push(item)
                }
            }
            if (this.error.length === 0) {
                alert("Data Submitted");
            }
            console.warn(this.form, this.error)
        }

    }
}
</script>
