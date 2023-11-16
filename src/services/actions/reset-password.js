import { api } from "../../utils/api";

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILURE = 'RESET_PASSWORD_FAILURE';

const resetPasswordSuccess = (payload) => ({ type: RESET_PASSWORD_SUCCESS, payload })

export function resetPassword(password, token) {
    return (dispatch) => {
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
