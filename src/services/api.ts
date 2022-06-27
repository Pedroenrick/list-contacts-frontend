import axios, {AxiosError} from 'axios'
import {parseCookies} from "nookies";

const cookies = parseCookies();

export const api = axios.create({
    baseURL: 'https://contact-list-api-laravel.herokuapp.com/api/',
    headers: {
        Authorization: `Bearer ${cookies["contacts.token"]}`
    }
});

api.interceptors.response.use(
    response => {
        return response;
    }, (error:AxiosError)  => {
        if(error.response.status === 401) {
            window.location.href = "/";
        }
    }

)