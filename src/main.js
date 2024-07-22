import './assets/base.css'
import 'vue3-toastify/dist/index.css';
import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/Page/HomeView.vue";
import ContactView from "@/Page/ContactView.vue";
import Vue3Toasity from 'vue3-toastify';
import LoginView from "@/Page/LoginView.vue";
import BackofficeView from "@/Page/BackofficeView.vue";
import {getState, setState} from "@/Store/store.js";

const routes = [
    {path: '/', component: HomeView, name: 'home'},
    {path: '/contact', component: ContactView, name: 'contact'},
    {path: '/auth', component: LoginView, name: 'login'},
    {
        path: '/backoffice', component: BackofficeView, name: 'backoffice', beforeEnter: (to, from) => {
            const token = getState().token;
            if (!token) {
                return '/auth'
            }
        }
    },
    {
        path: '/logout', component: null, beforeEnter: (to, from) => {
            setState({token: null})
            return '/'
        },
        name: 'logout'
    },
    {path: '/:pathMatch(.*)*', redirect: '/', name: 'not-found'},
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
