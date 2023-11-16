import { api } from "../../utils/api";
import { deleteCookie } from "../../utils/cookie";

export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE';

const userLogoutSuccess = (payload) => ({ type: USER_LOGOUT_SUCCESS, payload })

export function userLogout() {
    return (dispatch) => {
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
