import {getCookie} from "./cookie";

class Api {
    constructor (
        baseUrl
    ) {
        this.baseUrl = baseUrl
    }

    configureUrl (url) {
        return `${this.baseUrl}/${url}`
    }

    makeRequest (url, method, body = null, additionalHeaders = {}) {
        return fetch(
            this.configureUrl(url),
            {
                method: method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    ...additionalHeaders
                },
                body: body
            }
        ).then(response => {
            if (!response.ok) {
                return Promise.reject(`Error: ${response.status}`)
            }

            return response.json()
        })
    }

    getIngredients () {
        return this.makeRequest('ingredients', 'GET')
    }

    getOrderDetails (ingredients) {
        return this.makeRequest('orders', 'POST', JSON.stringify({ingredients: ingredients}))
    }

    registration (name, email, password) {
        return this.makeRequest(
            'auth/register',
            'POST',
            JSON.stringify({
                name,
                email,
                password
            }))
    }

    authorization (email, password) {
        return this.makeRequest(
            'auth/login',
            'POST',
            JSON.stringify({
                email,
                password
            })
        )
    }

    logout () {
        return this.makeRequest(
            'auth/logout',
            'POST',
            JSON.stringify(
                {
                    token: getCookie('refresh')
                }
            )
        )
    }

    forgot (email) {
        return this.makeRequest(
            'password-reset',
            'POST',
            JSON.stringify(
                {
                    email
                }
            )
        )
    }

    reset (password, token) {
        return this.makeRequest(
            'password-reset/reset',
            'POST',
            JSON.stringify(
                {
                    password,
                    token
                }
            )
        )
    }

    refresh () {
        return this.makeRequest(
            'auth/token',
            'POST',
            JSON.stringify(
                {
                    token: getCookie('refresh')
                }
            )
        )
    }

    getProfile () {
        return this.makeRequest(
            'auth/user',
            'GET',
            null,
            {
                authorization: 'Bearer ' + getCookie('access')
            }
        )
    }

    updateProfile (name, email, password) {
        return this.makeRequest(
            'auth/user',
            'PATCH',
            JSON.stringify(
                {
                    name,
                    email,
                    password
                }
            ),
            {
                authorization: 'Bearer ' + getCookie('access')
            }
        )
    }
}

export const api = new Api('https://norma.nomoreparties.space/api')
