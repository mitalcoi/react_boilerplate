// @flow
import React from 'react';
import {browserHistory} from 'react-router';
import request from 'superagent';

class apiHelper {
    static get = (url: string, query: Object, callback: Function) => {
        let location = browserHistory.getCurrentLocation();
        let req = request.get('/api' + url);
        req.query({ ...query });
        req.set('X-Requested-With', 'XMLHttpRequest');
        req.end((error, data) => {
            if (error && error.status === 401) {
                browserHistory.push({
                    pathname: '/logout',
                    query: {
                        json: JSON.stringify(location)
                    }
                });
            } else {
                callback(error, data);
            }
        });
    };
    static post = (url: string, postData: Object, query: Object, callback: Function) => {
        let location = browserHistory.getCurrentLocation();
        let req = request.post('/api' + url).send(postData);
        req.query({ ...query });
        req = req.set('X-Requested-With', 'XMLHttpRequest');
        req.end((error, data) => {
            if (error && error.status === 401) {
                browserHistory.push({
                    pathname: '/logout',
                    query: {
                        json: JSON.stringify(location)
                    }
                });
            } else {
                callback(error, data);
            }
        });
    };
}

export default apiHelper;