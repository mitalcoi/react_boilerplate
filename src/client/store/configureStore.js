// @flow
import React from 'react';
import RavenMiddleware from 'redux-raven-middleware';

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import {REHYDRATE} from 'redux-persist/constants';
import createActionBuffer from 'redux-action-buffer';

import {browserHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';

import rootReducer from './../reducers';

import formMiddleWare from './middleware/formMiddleWare';

import type {Store, State} from 'pnhd-types';


export default function configureStore(initialState: Object): Store {

    let middleware = [
        thunk,
        createActionBuffer(REHYDRATE),
        formMiddleWare,
        routerMiddleware(browserHistory)
    ];

    if (process.env.SENTRY_DSN) {
        middleware.push(RavenMiddleware(process.env.SENTRY_DSN));
    }

    let composeEnhancers = compose;

    if (process.env.APP_ENV !== 'prod' && window.__REDUX_DEVTOOLS_EXTENSION__) {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            autoRehydrate(),
            applyMiddleware(
                ...middleware
            )
        )
    );

    persistStore(store, {blacklist: ['form']});

    return store;
}