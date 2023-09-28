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
                'Accept': 'application/json',
                'Content-Type': 'application/json'
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
