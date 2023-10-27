import { api } from "../../utils/api";

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';

const forgotPasswordSuccess = (payload) => ({ type: FORGOT_PASSWORD_SUCCESS, payload })

export function forgotPassword(email) {
    return (dispatch) => {
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
