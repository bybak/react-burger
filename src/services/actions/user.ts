import { api } from "../../utils/api";
import {TUser} from "../../utils/types";
import {Dispatch} from "redux";

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

const getUserSuccess = (payload: TUser) => ({ type: GET_USER_SUCCESS, payload})

export function getUser() {
    return (dispatch: Dispatch) => {
        dispatch({type: GET_USER_REQUEST})
        api.getProfile()
            .then((data) => {
                dispatch(getUserSuccess(data));
            })
            .catch(() => {
                dispatch({type: GET_USER_FAILURE})
            })
    }
}

const updateUserSuccess = (payload: TUser) => ({ type: UPDATE_USER_SUCCESS, payload })

export function updateUser(name: string, email: string, password: string) {
    return (dispatch: Dispatch) => {
        dispatch({type: UPDATE_USER_REQUEST})
        api.updateProfile(name, email, password)
            .then((data) => {
                dispatch(updateUserSuccess(data));
            })
            .catch(() => {
                dispatch({type: UPDATE_USER_FAILURE})
            })
    }
}
