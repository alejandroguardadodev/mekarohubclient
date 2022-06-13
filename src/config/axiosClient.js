import axios from 'axios'

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`
})

const generateConfig = (token) => {
    return {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
}

export default axiosClient;

export {
    generateConfig
}