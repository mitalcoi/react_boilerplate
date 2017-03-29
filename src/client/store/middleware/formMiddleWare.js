import {startAsyncValidation, stopAsyncValidation, setSubmitSucceeded} from 'redux-form/lib/actions';
import apiHelper from './../../utils/apiHelper';
import type {Action, Dispatch, Store, State} from 'pnhd-types';

const customStopAsyncValidation = (form, errors = {}, data: Object) : Action => {
    let actionC = stopAsyncValidation(form, errors);
    actionC.payload=data;
    return actionC;
};

const processResponse = (error?: Object, data: Object, dispatch: Dispatch, action: Action) => {

    if (data.body && !data.body.success) {
        dispatch(customStopAsyncValidation(action.form, data.body.errors, data.body));
    } else {
        dispatch(customStopAsyncValidation(action.form, {}, data.body ? data.body : data));

        if (action.callbacks && typeof action.callbacks.success === 'function') {
            action.callbacks.success(dispatch, data.body ? data.body : data);
        }
    }
};

export default (store: Store) => (next: Dispatch) => (action: Action): any => {
    if (action.type === 'raw/FORM_FACTORY_API') {
        let url = action.url;

        let postData = action.data;
        let query = {
            ...action.query
        };
        next(startAsyncValidation(action.form));

        apiHelper.post(url, postData, query, (err, data) => {
            processResponse(err, data, store.dispatch, action);
        });
        

    } else {
        next(action);
    }
};