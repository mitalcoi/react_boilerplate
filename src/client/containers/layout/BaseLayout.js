// @flow
import React from 'react';
import {connect} from 'react-redux';

import type {State, Dispatch, History$Location} from 'pnhd-types';

import Menu from './../../components/widgets/menu';
import Header from './../../components/widgets/header';
import {toggleMenu} from './../../actions/ui';

const BaseLayout = ({children, ...props}) => {

    const getModuleName = () => {
        let path = props.location.pathname.replace('/index', '');
        let r = new RegExp(/\/([a-z]+)$|/);
        return path.match(r).length > 1 ? path.match(r)[1] : '';
    };

    return (
        <div className='base-layout'>
            <Menu isOpened={props.isMenuOpened} toggle={props.doToggleMenu} items={[
                {label: 'home', path: '/', icon: 'home'},
                {label: 'jobs', path: '/', icon: 'check-circle-o'},
                {label: 'calls', path: '/', icon: 'phone'},
                {label: 'campaigns', path: '/', icon: 'line-chart'},
                {label: 'jobsheets', path: '/', icon: 'table'},
                {label: 'performance', path: '/', icon: 'bullhorn'}
            ]}/>
            <div className='main-wrap'>
                <Header moduleName={getModuleName()} />
                <div className='right-panel'></div>
                <div className='content-container'>
                    {children}
                </div>
            </div>
        </div>
    );
};

function mapStateToProps(state: State) {
    return {
        isMenuOpened: state.ui.menu.isOpen
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        doToggleMenu: () => {
            dispatch(toggleMenu());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseLayout);