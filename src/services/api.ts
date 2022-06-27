import axios from 'axios'
export const api = axios.create({
    baseURL: 'https://contact-list-api-laravel.herokuapp.com/api/'
})