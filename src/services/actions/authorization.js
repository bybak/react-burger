import { api } from "../../utils/api";
import { setCookie } from "../../utils/cookie";

export const USER_AUTHORIZATION_REQUEST = 'USER_AUTHORIZATION_REQUEST';
export const USER_AUTHORIZATION_SUCCESS = 'USER_AUTHORIZATION_SUCCESS';
export const USER_AUTHORIZATION_FAILURE = 'USER_AUTHORIZATION_FAILURE';

const userAuthorizationSuccess = (payload) => ({ type: USER_AUTHORIZATION_SUCCESS, payload })

export function userAuthorization(email, password) {
    return (dispatch) => {
        dispatch({type: USER_AUTHORIZATION_REQUEST})
        api.authorization(email, password)
            .then((data) => {
                const {success, refreshToken, accessToken} = data
                if (success) {
                    setCookie('access', accessToken.split('Bearer ')[1]);
                    setCookie('refresh', refreshToken);
                    dispatch(userAuthorizationSuccess(data));
                }
            })
            .catch(() => {dispatch({type: USER_AUTHORIZATION_FAILURE})})
    }
}
