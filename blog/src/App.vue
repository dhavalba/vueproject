<template>
 
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <router-link to="/">Home</router-link><br>
  <router-link to="/formValidate">Form validate</router-link><br>
  <router-link to="/multislots">Multi Slots</router-link><br>
  <router-link to="/multislots/1">test Multi Slots</router-link><br>
  <router-link to="/multislots/2">dhaval Multi Slots</router-link><br>
  <router-link to="/multislots/3">dhaval Multi Slots</router-link><br>
  <router-link to="/APIfetch">Api Fetch</router-link><br>
  <router-link to="/Xyz">XYZ</router-link><br>
  <router-link to="/SendFormData">Send Form Data using APi</router-link><br>
  <router-view></router-view>
  <!-- <HomeComp/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import router from './routes';
// import HomeComp from './components/HomeComp.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // router
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
