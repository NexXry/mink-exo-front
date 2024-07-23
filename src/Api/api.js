import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Accept': 'application/ld+json',
        'Content-type': 'application/ld+json',
    }
})

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
        return api.patch(entity, data)
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
