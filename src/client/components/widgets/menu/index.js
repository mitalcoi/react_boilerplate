// @flow
import React from 'react';
import {Link} from 'react-router';

type Menu$Item = {
    label: string,
    path: string,
    icon?: string,
    handleClick?: Function,
    items?: Array<Menu$Item>
}

type Menu$Props = {
    toggle: Function,
    isOpened: boolean,
    items: Array<Menu$Item>
}

const Menu = (props: Menu$Props) => {
    let sizeClass = props.isOpened ? 'full' : 'short';

    return (
        <div className={'sidebar ' + sizeClass}>
            <a onClick={props.toggle} href='javascript:void(0)' className={'sidebar-top'}>
                <i className='fa fa-bars' />
                <p className='sidebar-top-logo'>Primenet</p>
            </a>
            {props.items.map(
                (item, i) => {
                    return (
                        <Link className={'sidebar-item'} key={i} to={item.path}>
                            {item.icon && <i className={'fa fa-' + item.icon} />}
                            <span className="sidebar-item-label">{item.label}</span>
                        </Link>
                    );
                })
            }
        </div>
    );
};

export default Menu;