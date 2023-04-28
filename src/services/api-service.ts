import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});

let authInterceptorID: number;

export const authenticateAPI = (token: string) => {
    authInterceptorID = api.interceptors.request.use((config) => {
        config.headers.authorization = `bearer ${token}`;
        return config;
    });
};

export const unauthenticateAPI = () => {
    api.interceptors.request.eject(authInterceptorID);
};

export const fetcher = (url: string) => api.get(url).then(({data}) => data);

export default api