// @flow
import  React  from 'react';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import {render} from 'react-dom';
import routes from './store/routes';
import configureStore from './store/configureStore';
import initialState from './reducers/initialState';

const rootEl = document.getElementById('root');
const store = configureStore(initialState);

const renderApp = (routes,store) => {
    render (
        <Provider store={store}>
            <Router history={syncHistoryWithStore(browserHistory, store)} routes={routes}/>
        </Provider>,
        rootEl
    )
};

renderApp(routes, store);