// @flow
import {combineReducers} from 'redux';

import {routerReducer as routing} from 'react-router-redux';
import {reducer as form} from 'redux-form';
import userCredentials from './userCredentials';
import ui from './ui';

import InitialState from './initialState';

import type {State, Action} from 'pnhd-types';

const appReducer = combineReducers({ userCredentials, ui, routing, form });

const rootReducer = (state: State, action: Action): State => {
    if (action.type === 'USER_LOGOUT') {
        return {
            ...InitialState,
            routing: {
                locationBeforeTransitions: {...action.location}
            }
        };
    }
    return appReducer(state, action);
};

export default rootReducer;