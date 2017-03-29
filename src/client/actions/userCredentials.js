// @flow
import type {Action, History$Location} from 'pnhd-types';

export function successLogin(token: string, data: Object): Action {
    return {
        type: 'USER_LOGIN_SUCCESS',
        payload: {
            token: token,
            data: data
        }
    };
}

export  function logout(location: History$Location): Action {
    return {
        type: 'USER_LOGOUT',
        location: location
    }
}