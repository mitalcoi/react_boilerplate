import React from 'react'
import {logout} from  './../../actions/userCredentials'
import {connect} from 'react-redux'

import type {State, History$Location} from 'pnhd-types';

class Logout extends React.Component {

    componentDidMount() {
        let logoutLocation: History$Location;
        if (this.props.location.query.json) {
            logoutLocation = JSON.parse(this.props.location.query.json);
        } else {
            logoutLocation = {
                pathname: '/',
                query: {}
            }
        }
        this.props.dispatch(logout(logoutLocation));
    }

    render() {
        return null;
    }
}

const mapStateToProps = (state: State) => {
    return {
        location: state.routing.locationBeforeTransitions
    }
};

export default connect(mapStateToProps)(Logout);
