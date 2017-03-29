// @flow
import InitialState from './initialState';
import {combineReducers} from 'redux';
import type {State$UserCredentials, Action} from 'pnhd-types';

const userCredentials = (state: State$UserCredentials = InitialState.userCredentials,
                         action: Action): State$UserCredentials => {
    switch (action.type) {
        // ...
        case 'USER_LOGIN_SUCCESS': {
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true,
                data: {
                    ...action.payload.data
                }
            };
        }
        default:
            return state
    }
};

export default userCredentials;