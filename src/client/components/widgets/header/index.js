// @flow
import React, {PropTypes} from 'react'
import {Link} from 'react-router';

import type {Props$Header} from 'pnhd-types';

const Header = (props: Object) => {
    const {moduleName} : Props$Header = props;

    const resolveModuleName = () => {
        switch (moduleName) {
            case 'job': return 'Jobs';
            case 'call' : return 'Calls';
            case 'campaign': return 'Campaigns';
            case 'jobsheets': return 'Job Sheets';
            case 'performance': return 'Performance';
            default: return 'Home';
        }
    };

    return (
        <div className='header'>
            <p className='header-title'>{resolveModuleName()}</p>
            <div className='header-right'>
                <div className='user'>
                    <p className='user-avatar' />
                    <p className='user-info'>
                        User Login <br/>
                        <Link to='/logout'> Log out </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;
