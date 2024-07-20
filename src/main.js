import './assets/base.css'

import {createApp} from 'vue'
import App from './App.vue'
import {createRouter,  createWebHistory} from "vue-router";
import HomeView from "@/Page/HomeView.vue";
import ContactView from "@/Page/ContactView.vue";


const routes = [
    {path: '/', component: HomeView,name:'home'},
    {path: '/contact', component: ContactView,name:'contact'},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
