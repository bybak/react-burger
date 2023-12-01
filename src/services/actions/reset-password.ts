import { api } from "../../utils/api";
import {Dispatch} from "redux";

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILURE = 'RESET_PASSWORD_FAILURE';

const resetPasswordSuccess = (payload: boolean) => ({ type: RESET_PASSWORD_SUCCESS, payload })

export function resetPassword(password: string, token: string) {
    return (dispatch: Dispatch) => {
        dispatch({type: RESET_PASSWORD_REQUEST})
        api.reset(password, token)
            .then(({success}) => {
                dispatch(resetPasswordSuccess(success));
            })
            .catch(() => {
                dispatch({type: RESET_PASSWORD_FAILURE})
            })
    }
}
