// @flow
import type {State} from 'pnhd-types';

const InitialState: State = {
    userCredentials: {
        token: '',
        isAuthenticated: false,
        data: {
            roles: [],
            expired: {}
        }
    },
    ui: {
        appIsFetch: false,
        menu: {
            isOpen: false
        }
    },
    form: {},
    routing: {
        locationBeforeTransitions: {
            pathname: '/'
        }
    }
};

export default InitialState;