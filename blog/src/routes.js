import {createWebHistory,createRouter} from 'vue-router'
import HomeComp from './components/HomeComp.vue';
import formValidate from './components/formValidate.vue';
import multislots from './components/multislots.vue';
import Pagenotfound from './components/Pagenotfound';
import APIfetch from './components/APIfetch';
import SendFormData from './components/SendFormData';

const routes = [

    {
        name: 'Home',
        path: '/',
        component: HomeComp
    },
    {
        name: 'Form Validate',
        path: '/formValidate',
        component: formValidate
    },
    {
        name: 'Mutli Slot',
        path: '/multislots',
        component: multislots
    },
    {
        name: 'Mutli Slot',
        path: '/multislots/:name',
        component: multislots
    },
    {
        name: 'APIfetch',
        path: '/APIfetch',
        component: APIfetch
    },
    {
        name: 'SendFormData',
        path: '/SendFormData',
        component: SendFormData
    },
    {
        name: 'Not Found',
        path: '/:pathMatch(.*)*',
        component: Pagenotfound
    }
];

const router=createRouter({
    history: createWebHistory(),
    routes
});
export default router;


// command to install router cli is npm i vue-router@next