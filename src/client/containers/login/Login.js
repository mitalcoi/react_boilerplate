// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import request from 'superagent';

import LoginForm from './LoginForm';
import {successLogin} from './../../actions/userCredentials';

import type {State, Dispatch} from 'pnhd-types';

class Login extends Component {

    handleSubmit = (values) => {
        let req = request.post('/api/login_check').send(values);
        req = req.set('Content-Type', 'application/x-www-form-urlencoded');
        req.end(this.handleResponse);
    }

    handleResponse = (err, data) => {
        if (!err) {
            let {body} = data;
            this.props.successLogin(body.token, body.data)
        }
    };
    
    render() {
        return (
            <div className='login'>
                <LoginForm 
                    onSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: State) => {
    return {

    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        successLogin: (token, data) => {
            dispatch(successLogin(token, data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);