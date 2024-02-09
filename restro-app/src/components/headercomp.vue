<template>
<header>
    <div class="header-top">
        <div class="container">
            <div class="row">
                <div class="col-md-3 text-left">
                    <router-link to="/"><img alt="Vue logo" class="img-fluid w-100px" src="../assets/Images/r-logo.png"></router-link>
                </div>
                <div class="col-md-9 text-right">
                    <div>
                        <ul>
                            <li>
                                <router-link to="/">Home</router-link>
                            </li>
                            <li>
                                <router-link to="/signup">Signup</router-link>
                            </li>
                            <li>
                                <router-link to="/login">Login</router-link>
                            </li>
                            <li>
                                <router-link to="/Add-Restro">Add Restro</router-link>
                            </li>
                            <li>
                                <router-link to="/Update-Restro">Update Restro</router-link>
                            </li>
                            <li>
                                <router-link to="/" v-on:click="Logout">Logout</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
</header>
</template>

<script>
export default {
    name: "headercomp",
    data() {
        return {

        }
    },
    methods: {
        Logout() {
            localStorage.clear();
            this.$router.push({name: 'Login'})
        }
    }
}
</script>

<style>
.header-top {
    background-color: #380500;
}

.header-top ul {
    padding-left: 0;
    display: flex;
    margin-bottom: 0;
}

.header-top ul li a {
    color: aliceblue;
    padding: 15px;
    display: block;
}

.header-top ul li {
    transition-duration: 0.4s;
    /* margin-right: 10px; */
}

.header-top ul li:hover {
    background-color: #d9610b;
    color: #fff;
}

#app {
    margin-top: 0;
}

li {
    list-style: none;
}
.w-100px {
    width: 88px;
}
.header-top .row {
    align-items: center;
}
</style>
