<template>
<h1>Home Component</h1>
<user :GetUser="getusername"/>

<formValidate/>
<watcher/>
<slotComp><h2>Hii dhaval how are you</h2></slotComp>
<multislots>
    <template v-slot:firstBlock>
        <h3>First block</h3>
    </template>
    <template v-slot:secondBlock>
        <h3>Second block</h3>
    </template>
    <template v-slot:thirdblock>
        <h3>third block</h3>
    </template>
    
</multislots>
<button @click="tab='dynamicCompJava'">Load Java</button>
<button @click="tab='dynamicCompReact'">Load React</button>
<button @click="tab='dynamicCompVue'">Load Vue</button>


<component :is="tab"/>

<teleport to="#footer">
    <footerComp/>
</teleport>

</template>

<script>
import user from './user.vue'
import formValidate from './formValidate.vue'
import watcher from './watcher.vue'
import slotComp from './slotComp.vue'
import multislots from './multislots.vue'
import dynamicCompJava from './dynamicCompJava.vue'
import dynamicCompReact from './dynamicCompReact.vue'
import dynamicCompVue from './dynamicCompVue.vue'
import footerComp from './footerComp.vue'
export default {
    name: 'HomeComp',
    components: {
       user,
       formValidate,
       watcher,
       slotComp,
       multislots,
       dynamicCompJava,
       dynamicCompReact,
       dynamicCompVue,
       footerComp,
    },
    data() {
        return {
            Displayname: "",
            tab:"dynamicCompJava"

        }
    },
    methods: {
        getusername(name) {
            this.Displayname = name
        }
    }
    
    
}
</script>

<style scoped>
h1 {
    color: red;
    font-size: 40px;
    font-weight: 600;
}

h3 {
    color: green;
    font-size: 30px;
}
.font-class {
    font-size: 12px;
}
p {
    font-size: 18px;
    color: black;
}
.green {
    background-color: green;
    font-size: 26px;
}
</style>
