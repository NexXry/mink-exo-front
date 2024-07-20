import './assets/base.css'
import 'vue3-toastify/dist/index.css';
import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/Page/HomeView.vue";
import ContactView from "@/Page/ContactView.vue";
import Vue3Toasity from 'vue3-toastify';

const routes = [
    {path: '/', component: HomeView, name: 'home'},
    {path: '/contact', component: ContactView, name: 'contact'},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
    .use(
        Vue3Toasity,
        {
            autoClose: 3000,
        }
    )
    .use(router)
    .mount('#app')
