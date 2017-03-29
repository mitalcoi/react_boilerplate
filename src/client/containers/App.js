// @flow
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import Login from './login/Login';

import type {State} from 'pnhd-types';

const App = ({isAuth, children, ...props}: Object) => {
    let content = null;
    
    if (isAuth) {
        content = (
            <div>
                <div className='class'>Hello World!</div>
                <Link to='/logout'>Log Out</Link>
                {children}
            </div>
        );
    } else {
        content = (<Login {...props} />);
    }

    return content;
};

const mapStateToProps = (state: State) => {
    return {
        isAuth: state.userCredentials.isAuthenticated
    }
};

export default connect(mapStateToProps)(App);