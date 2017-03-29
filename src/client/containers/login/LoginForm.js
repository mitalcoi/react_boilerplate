// @flow
import React from 'react';
import {Field, reduxForm} from 'redux-form';

import {Input} from './../../components/ui/form';

const LoginForm = ({handlesubmit, ...props}: Object) => {
    return (
        <form onSubmit={handlesubmit}>
            <Field name='_username' label='Username' component={Input} />
            <Field name='_password' label='Password' component={Input} />
            <button type='button' onClick={props.submit} className='pt-button pt-intent-primary'>Log In</button>
        </form>
    );
};

export default reduxForm({
    form: 'login-form'
})(LoginForm);