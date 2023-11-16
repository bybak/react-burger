import {combineReducers} from "redux";
import {burgerConstructorReducer} from "./burger-constructor";
import {burgerIngredientsReducer} from "./burger-ingredients";
import {ingredientDetailsReducer} from "./ingredient-details";
import {orderDetailsReducer} from "./order-details";
import {scrollIngredientsReducer} from "./burger-ingredients-scroll";
import { userRegistrationReducer } from './registration';
import { forgotPasswordReducer } from './forgot-password';
import { resetPasswordReducer } from './reset-password';
import { userAuthorizationReducer } from './authorization';
import { profileReducer } from './user';

export const rootReducer = combineReducers({
    burgerConstructor: burgerConstructorReducer,
    burgerIngredients: burgerIngredientsReducer,
    ingredientDetails: ingredientDetailsReducer,
    orderDetails: orderDetailsReducer,
    scrollIngredients: scrollIngredientsReducer,
    registration: userRegistrationReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    userAuthorization: userAuthorizationReducer,
    profile: profileReducer,
})
