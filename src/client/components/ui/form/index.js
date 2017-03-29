// @flow
import React from 'react';

import type {Redux$FormType} from 'pnhd-types';

export const Input = ({input, meta: {touched, error}, ...props}: Redux$FormType): React.Element<*> => {
    return (
        <div className='form-field text-input'>
            <p className='form-field-label'>
                {props.label ? props.label : input.name}
            </p>
            <input
                className="pt-input pt-fill"
                type="text"
                placeholder={props.label ? props.label : input.name}
                {...input}
                {...props}
            />
            {touched && error && <span className="form-field-error">{error}</span>}
        </div>
    );
};