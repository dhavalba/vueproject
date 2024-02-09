import home from './components/home.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import headercomp from './components/headercomp.vue'
import UpdateRestro from './components/UpdateRestro.vue'
import AddRestro from './components/AddRestro.vue'
import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        name: "home",
        component: home,
        path: '/'
    },
    {
        name: "Signup",
        component: Signup,
        path: '/Signup'
    },
    {
        name: "Login",
        component: Login,
        path: '/login'
    },
    {
        name: "headercomp",
        component: headercomp,
        path: '/headercomp'
    },
    {
        name: "UpdateRestro",
        component: UpdateRestro,
        path: '/Update-Restro/:id'
    },
    {
        name: "AddRestro",
        component: AddRestro,
        path: '/Add-Restro'
    },
]


const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router


