import { api } from "../../utils/api";
import { deleteCookie } from "../../utils/cookie";
import {IUserLogoutSuccess} from "./interfaces";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppDispatch, RootState} from "../../index";

export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE';

export const userLogoutSuccess = (payload: boolean): IUserLogoutSuccess => ({ type: USER_LOGOUT_SUCCESS, payload })

export function userLogout () {
    return (dispatch: AppDispatch) => {
        dispatch({type: USER_LOGOUT_REQUEST})
        api.logout()
            .then(({success}) => {

                if (success) {
                    deleteCookie('access');
                    deleteCookie('refresh');
                    dispatch(userLogoutSuccess(success));
                }
            })
            .catch(() => {
                dispatch({type: USER_LOGOUT_FAILURE})
            })
    }
}
