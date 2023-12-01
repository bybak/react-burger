import {getCookie} from "./cookie";
import {TIngredientType} from "./types";

type TServerResponse<T> = {
    success: boolean;
} & T;

type TIngredientsResponse = TServerResponse<{
    data: TIngredientType[];
}>;

type TOrderDetailsResponse = TServerResponse<{
    name: string;
    order: {number: number}
}>;

type TGetProfileResponse = TServerResponse<{
    user: {
        email: string
        name: string
    }
}>

type TLogoutResponse = TServerResponse<{
    message: string
}>

type TPasswordResetResponse = TServerResponse<{
    message: string
}>

type TRefreshTokenResponse = TServerResponse<{
    refreshToken: string
}>

type TLoginAndRegisterResponse = TServerResponse<{
    accessToken: string
    refreshToken: string
    user: {
        email: string
        name: string
    }
}>

class Api {
    readonly baseUrl: string

    constructor (
        baseUrl: string
    ) {
        this.baseUrl = baseUrl
    }

    configureUrl (url: string): string {
        return `${this.baseUrl}/${url}`
    }

    checkResponse <T>(res: Response): Promise<T> {
        return res.ok ? res.json() : res.json().then(err => Promise.reject(err));
    };

    makeRequest <T>(url: string, method: string, body: string | null = null, additionalHeaders = {}): Promise<T> {
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
        ).then(res => this.checkResponse<T>(res))
    }

    getIngredients () {
        return this.makeRequest<TIngredientsResponse>('ingredients', 'GET')
    }

    getOrderDetails (ingredients: string[]) {
        return this.makeRequest<TOrderDetailsResponse>('orders', 'POST', JSON.stringify({ingredients: ingredients}))
    }

    registration (name: string, email: string, password: string) {
        return this.makeRequest<TLoginAndRegisterResponse>(
            'auth/register',
            'POST',
            JSON.stringify({
                name,
                email,
                password
            }))
    }

    authorization (email: string, password: string) {
        return this.makeRequest<TLoginAndRegisterResponse>(
            'auth/login',
            'POST',
            JSON.stringify({
                email,
                password
            })
        )
    }

    logout () {
        return this.makeRequest<TLogoutResponse>(
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
        return this.makeRequest<TPasswordResetResponse>(
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
        return this.makeRequest<TPasswordResetResponse>(
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
        return this.makeRequest<TRefreshTokenResponse>(
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
        return this.makeRequest<TGetProfileResponse>(
            'auth/user',
            'GET',
            null,
            {
                authorization: 'Bearer ' + getCookie('access')
            }
        )
    }

    updateProfile (name: string, email: string, password: string) {
        return this.makeRequest<TGetProfileResponse>(
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
