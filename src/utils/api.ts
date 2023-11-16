import {getCookie} from "./cookie";

class Api {
    readonly baseUrl: string

    constructor (
        baseUrl: string
    ) {
        this.baseUrl = baseUrl
    }

    configureUrl (url: string) {
        return `${this.baseUrl}/${url}`
    }

    makeRequest (url: string, method: string, body: string | null = null, additionalHeaders = {}) {
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
        ).then((response: Response) => {
            if (!response.ok) {
                return Promise.reject(`Error: ${response.status}`)
            }

            return response.json()
        })
    }

    getIngredients () {
        return this.makeRequest('ingredients', 'GET')
    }

    getOrderDetails (ingredients: string[]) {
        return this.makeRequest('orders', 'POST', JSON.stringify({ingredients: ingredients}))
    }

    registration (name: string, email: string, password: string) {
        return this.makeRequest(
            'auth/register',
            'POST',
            JSON.stringify({
                name,
                email,
                password
            }))
    }

    authorization (email: string, password: string) {
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

    forgot (email: string) {
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

    reset (password: string, token: string) {
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

    updateProfile (name: string, email: string, password: string) {
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
