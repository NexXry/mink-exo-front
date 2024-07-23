import axios from 'axios'
import {setState} from "@/Store/store.js";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Accept': 'application/ld+json',
        'Content-type': 'application/ld+json',
    }
})

api.interceptors.response.use(
    undefined,
    (error) => {
        switch (error.response.status) {
            case 401:
                setState({token: null});
                window.location.href = '/';
                break;
            default:
                return Promise.reject(error);
        }
    }
);

export default {
    async get(entity, isAdmin = false, token = "") {
        if (isAdmin && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            return api.get(entity)
        }

        return api.get(entity)
    },

    async post(entity, data, token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        return api.post(entity, data)
    },

    async patch(entity, data, token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        return api.patch(entity, data,{
            headers: {
                'Content-Type': 'application/merge-patch+json'
            }
        })
    },

    // DELETE method
    async remove(entity, token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        return api.delete(entity)
    },

    async login(data) {
        return api.post(import.meta.env.VITE_API_AUTH_URL, data)
    },
}
