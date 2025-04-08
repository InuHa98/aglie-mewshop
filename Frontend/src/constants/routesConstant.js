export const BASE_URL = import.meta.env.VITE_BASE_URL

export const API_PREFIX = import.meta.env.VITE_PREFIX_API

export const API_URL = BASE_URL + API_PREFIX


export const API_AUTHENTICATION = {
    LOGIN: API_URL + '/login',
    REGISTER: API_URL + '/register',
    INFOMATION: API_URL + '/infomation',
}

export const API_ADMIN_PANEL = {
    CATEGORIES: API_URL + '/admin/category-management'
}