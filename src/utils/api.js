class Api {
    constructor (
        baseUrl
    ) {
        this.baseUrl = baseUrl
    }

    getIngredients () {
        return fetch(
            `${this.baseUrl}/ingredients`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            ).then(response => {
                if (!response.ok) {
                    return Promise.reject(`Error: ${response.status}`)
                }

                return response.json()
            })
    }

    getOrderDetails (ingredients) {
        return fetch(
            `${this.baseUrl}/orders`,
            {
                    method: 'POST',
                    body: JSON.stringify({ingredients: ingredients}),
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    }
                }
        ).then(response => {
            if (!response.ok) {
                return Promise.reject(`Error: ${response.status}`)
            }

            return response.json()
        })
    }
}

export const api = new Api('https://norma.nomoreparties.space/api')
