// @flow
import React from 'react';
import type {
    Store as ReduxStore,
    Dispatch as ReduxDispatch,
    StoreEnhancer as ReduxStoreEnhancer,
    applyMiddleware as ReduxApplyMiddleware
} from 'redux'

declare module 'pnhd-types' {

    /**ACTIONS*/
    declare type Action = 
    {type: 'UI_MENU_TOGGLE'}|
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

    declare type Props$Header = {
        moduleName: string
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

    declare type State$Ui = {
        appIsFetch: boolean,
        menu: {
            isOpen: boolean
        }
    }
    
    /**GRID*/
    
    /*********/
    declare type State = {
        userCredentials: State$UserCredentials,
        ui: State$Ui,
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