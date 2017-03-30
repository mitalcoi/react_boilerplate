// @flow
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import Login from './login/Login';
import BaseLayout from './layout/BaseLayout';

import type {State} from 'pnhd-types';

const App = ({isAuth, appIsFetch, ...props}: Object) => {
    
    let content = null;
    
    if (!appIsFetch) {
        content = isAuth ? (<BaseLayout {...props} />) : (<Login {...props} />)
    }

    return (
        <div className='app'>
            {content}
        </div>
    );
};

const mapStateToProps = (state: State) => {
    return {
        isAuth: state.userCredentials.isAuthenticated,
        appIsFetch: state.ui.appIsFetch
    }
};

export default connect(mapStateToProps)(App);