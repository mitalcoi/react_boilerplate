// @flow
import React from 'react';
import type {
    Store as ReduxStore,
    Dispatch as ReduxDispatch,
    StoreEnhancer as ReduxStoreEnhancer,
    applyMiddleware as ReduxApplyMiddleware
} from 'redux'

declare module 'pnhd-types' {

    declare type Action = 
    {type: 'USER_LOGIN_SUCCESS', payload: { token: string, data: Object} }|
    {type: 'USER_LOGOUT', location: History$Location}|
    // {type: 'raw/FORM_FACTORY_API', url: string, form: string, data: Object}|
    // {type: 'redux-form/START_ASYNC_VALIDATION', meta: {form: 'string', field: 'string'}}|
    {type: 'redux-form/STOP_ASYNC_VALIDATION', meta: {form: string}, payload: Object};

    /**META*/
    declare type History$Location = {
        pathname: string,
        search?: string,
        hash?: string,
        action?: string,
        key?: string,
        query?: Object
    }

    /**PROPS*/
    declare type Redux$FormType = {
        input: Object,
        label?: string,
        options?: Object,
        meta: {touched: boolean, error: string}
    }

    /**STATE*/
    declare type State$UserCredentials = {
        token: string,
        isAuthenticated: boolean,
        data: {
            roles: Array<string>,
            expired: Object,
        }
    }
    
    /**GRID*/
    
    /*********/
    declare type State = {
        userCredentials: State$UserCredentials,
        form: Object,
        routing: {
            locationBeforeTransitions: {
                pathname: string,
                search?: string,
                hash?: string,
                action?: string,
                key?: string,
                query?: Object
            }
        }
    };
    declare type Dispatch = ReduxDispatch<Action>;
    declare type Store = ReduxStore<State, Action>;
}