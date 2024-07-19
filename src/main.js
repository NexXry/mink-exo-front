import './assets/base.css'

import {createApp} from 'vue'
import App from './App.vue'
import {createMemoryHistory, createRouter} from "vue-router";
import HomeView from "@/components/Page/HomeView.vue";
import ContactView from "@/components/Page/ContactView.vue";


const routes = [
    {path: '/', component: HomeView},
    {path: '/contact', component: ContactView},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
