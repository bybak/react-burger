import { ReactNode } from "react";

export type TIngredientType = {
    _id: string,
    name: string,
    type: string,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number,
    id?: string,
}

export type TItem = {
    id: string,
    ingredient: TIngredientType,
    type: string,
}

export type TBurgerIngredientsItem = {
    ingredient: TIngredientType
}

export type TBurgerConstructorElement = {
    element: TIngredientType,
    id: string | undefined,
    index: number
}

export type TBurgerIngredientsSet = {
    type: string
}

export type TModal = {
    header: string,
    onClose: () => void,
    children: ReactNode
}

export type TModalOverlay = {
    onClose: () => void
}

export type TOrderRegistration = {
    handleOrderClick: () => void
}
