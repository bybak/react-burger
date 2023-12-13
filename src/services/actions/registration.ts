import { api } from "../../utils/api";
import {TUser} from "../../utils/types";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppDispatch, RootState} from "../../index";

export const USER_REGISTRATION_REQUEST = 'USER_REGISTRATION_REQUEST';
export const USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS';
export const USER_REGISTRATION_FAILURE = 'USER_REGISTRATION_FAILURE';

export const userRegistrationSuccess = (payload: TUser) => ({ type: USER_REGISTRATION_SUCCESS, payload })

export function userRegistration(name: string, email: string, password: string) {
    return (dispatch: AppDispatch) => {
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
