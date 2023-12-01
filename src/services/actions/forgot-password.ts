import { api } from "../../utils/api";
import {Dispatch} from "redux";

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';

const forgotPasswordSuccess = (payload: boolean) => ({ type: FORGOT_PASSWORD_SUCCESS, payload })

export function forgotPassword(email: string) {
    return (dispatch: Dispatch) => {
        dispatch({type: FORGOT_PASSWORD_REQUEST})
        api.forgot(email)
            .then(({success}) => {
                dispatch(forgotPasswordSuccess(success));
            })
            .catch(() => {
                dispatch({type: FORGOT_PASSWORD_FAILURE})
            })
    }
}
