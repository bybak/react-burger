import { api } from "../../utils/api";

export const USER_REGISTRATION_REQUEST = 'USER_REGISTRATION_REQUEST';
export const USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS';
export const USER_REGISTRATION_FAILURE = 'USER_REGISTRATION_FAILURE';

const userRegistrationSuccess = (payload) => ({ type: USER_REGISTRATION_SUCCESS, payload })

export function userRegistration(name, email, password) {
    return (dispatch) => {
        dispatch({type: USER_REGISTRATION_REQUEST})
        api.registration(name, email, password)
            .then((res) => {
                dispatch(userRegistrationSuccess(res));
            })
            .catch((error) => {
                dispatch({type: USER_REGISTRATION_FAILURE})
            })
    }
}
