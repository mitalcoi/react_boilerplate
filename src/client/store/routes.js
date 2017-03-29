import React from 'react'
import {Route, IndexRoute, IndexRedirect} from 'react-router'

import App from './../containers/App';
import Logout from './../containers/login/Logout';

import './../css/style.scss';

export default (
    <Route path='/' component={App}>
        <Route path='/logout' component={Logout} />
    </Route>
);