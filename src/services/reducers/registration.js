import {
    USER_REGISTRATION_REQUEST,
    USER_REGISTRATION_SUCCESS,
    USER_REGISTRATION_FAILURE
} from "../actions/registration";

export const initialState = {
    success: false,
    user: {},
    registrationRequest: false,
    registrationError: false,
}

export const userRegistrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTRATION_REQUEST: {
            return {
                ...state,
                registrationRequest: true
            }
        }
        case USER_REGISTRATION_SUCCESS: {
            return {
                ...state,
                success: action.payload.success,
                user: action.payload.user,
                burgerIngredientsError: false,
            }
        }
        case USER_REGISTRATION_FAILURE: {
            return {
                ...state,
                registrationRequest: false,
                registrationError: true
            }
        }
        default: {
            return state;
        }
    }
}
